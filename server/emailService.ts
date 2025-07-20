import * as nodemailer from "nodemailer";
import { createWriteStream, mkdirSync, existsSync } from "fs";
import { join } from "path";
import PDFDocument from "pdfkit";
import { randomUUID } from "crypto";

// Fax routing by location code
const FAX_ROUTES = {
  FAMILY: "9089258090@metrofax.com",
  OUTPATIENT: "6097265810@metrofax.com",
  PARLIN: "4076418434@metrofax.com",
  SPECIALTY: "9083455030@metrofax.com",
};

interface EmailResult {
  status: "success" | "error";
  message: string;
}

export async function sendFaxEmail(
  locationCode: string,
  body: string,
  subjectPrefix: string,
  pdfPath?: string,
): Promise<EmailResult> {
  const toEmail =
    FAX_ROUTES[locationCode.toUpperCase() as keyof typeof FAX_ROUTES];

  if (!toEmail) {
    return {
      status: "error",
      message: `Invalid location code: ${locationCode}`,
    };
  }

  const fromEmail = process.env.FROM_EMAIL;
  const appPassword = process.env.APP_PASSWORD;

  if (!fromEmail || !appPassword) {
    return {
      status: "error",
      message:
        "Email credentials not configured. Please set FROM_EMAIL and APP_PASSWORD in environment variables.",
    };
  }

  const now = new Date().toLocaleString("en-US", {
    timeZone: "America/New_York",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  const subject = `${subjectPrefix} via GeorgiesRx.com - ${now}`;

  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: fromEmail,
        pass: appPassword,
      },
    });

    // Create email options
    const mailOptions: any = {
      from: fromEmail,
      to: toEmail,
      subject: subject,
      text: body,
    };

    // Attach PDF if provided
    if (pdfPath && existsSync(pdfPath)) {
      mailOptions.attachments = [
        {
          filename: "form.pdf",
          path: pdfPath,
        },
      ];
    }

    // Send email
    await transporter.sendMail(mailOptions);

    return {
      status: "success",
      message: `Fax sent to ${toEmail.split("@")[0]}`,
    };
  } catch (error) {
    console.error("Email sending error:", error);
    return {
      status: "error",
      message: `Email sending error: ${error}`,
    };
  }
}

export function generateRefillPDF(
  name: string,
  dob: string,
  medications: string,
  phone: string,
): string {
  const pdfDir = join(process.cwd(), "generated_pdfs");
  if (!existsSync(pdfDir)) {
    mkdirSync(pdfDir, { recursive: true });
  }

  const filename = `refill_${randomUUID()}.pdf`;
  const filepath = join(pdfDir, filename);

  const doc = new PDFDocument();
  doc.pipe(createWriteStream(filepath));

  const timestamp = new Date().toLocaleString("en-US", {
    timeZone: "America/New_York",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  doc.fontSize(14).text(`Refill Request for: ${name}`, 100, 100);
  doc.fontSize(10).text(`Submitted: ${timestamp} EST`, 100, 115);
  doc.fontSize(12).text(`Date of Birth: ${dob}`, 100, 140);
  doc.text(`Phone: ${phone}`, 100, 160);
  doc.text("Medications:", 100, 190);

  const medLines = medications.split("\n");
  medLines.forEach((line, index) => {
    doc.text(line, 120, 210 + index * 20);
  });

  doc.end();
  return filepath;
}

export function generateTransferPDF(data: any): string {
  const pdfDir = join(process.cwd(), "generated_pdfs");
  if (!existsSync(pdfDir)) {
    mkdirSync(pdfDir, { recursive: true });
  }

  const filename = `transfer_${randomUUID()}.pdf`;
  const filepath = join(pdfDir, filename);

  const doc = new PDFDocument();
  doc.pipe(createWriteStream(filepath));

  const timestamp = new Date().toLocaleString("en-US", {
    timeZone: "America/New_York",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  let y = 50;
  doc
    .fontSize(14)
    .fillColor("red")
    .text("Georgies Pharmacy - Transfer Request Form", 30, y);
  y += 20;
  doc
    .fontSize(10)
    .fillColor("black")
    .text(`Submitted: ${timestamp} EST`, 30, y);
  y += 30;

  doc.fontSize(12).fillColor("black");
  doc.text(`Name: ${data.first_name} ${data.last_name}`, 30, y);
  y += 20;
  doc.text(`DOB: ${data.dob}     Phone: ${data.mobile_phone}`, 30, y);
  y += 20;
  doc.text(`Address: ${data.address}`, 30, y);
  y += 30;

  doc.text("Medications to Transfer:", 30, y);
  y += 20;
  const medLines = data.medications.split("\n");
  medLines.forEach((line: string) => {
    doc.text(`- ${line}`, 50, y);
    y += 20;
  });

  y += 10;
  doc.text("Previous Pharmacy Details:", 30, y);
  y += 20;
  doc.text(`Name: ${data.current_pharmacy_name}`, 30, y);
  y += 20;
  doc.text(`Phone: ${data.current_pharmacy_phone}`, 30, y);

  doc.end();
  return filepath;
}

export function generateVaccinePDF(data: any): string {
  const pdfDir = join(process.cwd(), "generated_pdfs");
  if (!existsSync(pdfDir)) {
    mkdirSync(pdfDir, { recursive: true });
  }

  const filename = `vaccine_${randomUUID()}.pdf`;
  const filepath = join(pdfDir, filename);

  const doc = new PDFDocument();
  doc.pipe(createWriteStream(filepath));

  const timestamp = new Date().toLocaleString("en-US", {
    timeZone: "America/New_York",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  let y = 50;
  doc
    .fontSize(16)
    .fillColor("red")
    .text("Georgies Pharmacy Vaccine Consent Form", 30, y, { align: "center" });
  y += 30;
  doc
    .fontSize(12)
    .fillColor("black")
    .text("Better Care. Better Health.", 30, y, { align: "center" });
  y += 20;
  doc
    .fontSize(10)
    .text(`Submitted: ${timestamp} EST`, 30, y, { align: "center" });
  y += 30;

  const fields = [
    ["Location", data.location],
    ["Vaccine Type", data.vaccine_type],
    ["Other Vaccine Name", data.other_vaccine_name || ""],
    ["Appointment Date", data.appointment_date || ""],
    ["Appointment Time", data.appointment_time || ""],
    ["Patient Name", `${data.first_name} ${data.last_name}`],
    ["Date of Birth", data.dob],
    ["Phone", data.phone],
    ["Email", data.email],
    [
      "Address",
      `${data.address1} ${data.address2 || ""}, ${data.city}, ${data.state} ${data.zip}`,
    ],
    ["Gender", data.gender],
    ["Ethnicity", data.ethnicity],
    ["Race", data.race],
    ["Primary Doctor", `${data.doctor_first || ""} ${data.doctor_last || ""}`],
    ["Current Pharmacy", data.current_pharmacy || ""],
    ["Insurance Status", data.insured],
    ["Insurance Type", data.insurance_type || ""],
    ["Medicare ID", data.medicare_id || ""],
    ["Payer ID", data.payer_id || ""],
    ["Insurance ID", data.insurance_id || ""],
    ["Group", data.insurance_group || ""],
    [
      "Insured First/Last Name",
      `${data.insured_first || ""} ${data.insured_last || ""}`,
    ],
    [
      "Policy Holder First/Last Name",
      `${data.policy_holder_first || ""} ${data.policy_holder_last || ""}`,
    ],
  ];

  fields.forEach(([label, value]) => {
    doc.fontSize(10).text(`${label}:`, 50, y);
    doc.text(value || "", 200, y);
    y += 20;
  });

  doc.text("Screening for Immunization:", 50, y);
  y += 20;

  const screening = [
    ["Fever or illness today", data.screening_fever],
    ["Allergy to eggs/latex/component", data.screening_allergy],
    ["Serious reaction in the past", data.screening_reaction],
    ["Guillain-Barre syndrome", data.screening_gbs],
    ["Vaccines in past 30 days", data.screening_recent_vaccine],
    ["Pregnant or breastfeeding", data.screening_pregnancy],
  ];

  screening.forEach(([label, value]) => {
    doc.text(`${label}:`, 50, y);
    doc.text(value || "", 200, y);
    y += 20;
  });

  doc.text("Consent for Immunization:", 50, y);
  y += 20;
  doc.text(`Date: ${data.consent_date}`, 50, y);
  y += 20;
  doc.text(`Signature: ${data.signature}`, 50, y);

  doc.end();
  return filepath;
}
