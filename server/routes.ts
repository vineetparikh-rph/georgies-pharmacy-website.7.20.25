import type { Express } from "express";
import express from "express";
import { createServer, type Server } from "http";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { storage } from "./storage";
import { setupAuth, isAuthenticated } from "./replitAuth";
import { generateHealthTips } from "./healthTipsService";
import { pharmacyIntegration } from "./pharmacySystemIntegration";
import { socketProtocol } from "./socketProtocol";
import { winRxScrapers } from "./winrxScraper";
import {
  insertRefillRequestSchema,
  insertTransferRequestSchema,
  insertChatMessageSchema,
} from "@shared/schema";
import { z } from "zod";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export async function registerRoutes(app: Express): Promise<Server> {
  // Public routes (before auth middleware)
  app.get("/pharmacy-login", (req, res) => {
    res.sendFile(
      join(__dirname, "../prescription-services/pharmacy_login.html"),
    );
  });

  // Auth middleware
  await setupAuth(app);

  // Auth routes
  app.get("/api/auth/user", isAuthenticated, async (req: any, res) => {
    try {
      const userId = (req.user as any).claims.sub;
      const user = await storage.getUser(userId);
      res.json(user);
    } catch (error) {
      console.error("Error fetching user:", error);
      res.status(500).json({ message: "Failed to fetch user" });
    }
  });
  // Get patient data
  app.get("/api/patient/:id", isAuthenticated, async (req, res) => {
    try {
      const patientId = parseInt(req.params.id);
      const patient = await storage.getPatient(patientId);

      if (!patient) {
        return res.status(404).json({ message: "Patient not found" });
      }

      res.json(patient);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Get prescriptions for patient
  app.get(
    "/api/patient/:id/prescriptions",
    isAuthenticated,
    async (req, res) => {
      try {
        const patientId = parseInt(req.params.id);
        const prescriptions =
          await storage.getPrescriptionsByPatientId(patientId);
        res.json(prescriptions);
      } catch (error) {
        res.status(500).json({ message: "Internal server error" });
      }
    },
  );

  // Submit refill request
  app.post("/api/refill-requests", isAuthenticated, async (req, res) => {
    try {
      const validatedData = insertRefillRequestSchema.parse({
        ...req.body,
        patientId: (req.user as any).claims.sub, // Use authenticated user's ID
      });

      const refillRequest = await storage.createRefillRequest(validatedData);
      res.status(201).json(refillRequest);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res
          .status(400)
          .json({ message: "Invalid request data", errors: error.errors });
      }
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Get refill requests for patient
  app.get(
    "/api/patient/:id/refill-requests",
    isAuthenticated,
    async (req, res) => {
      try {
        const patientId = parseInt(req.params.id);
        const requests = await storage.getRefillRequestsByPatientId(patientId);
        res.json(requests);
      } catch (error) {
        res.status(500).json({ message: "Internal server error" });
      }
    },
  );

  // Submit transfer request
  app.post("/api/transfer-requests", isAuthenticated, async (req, res) => {
    try {
      const validatedData = insertTransferRequestSchema.parse({
        ...req.body,
        patientId: (req.user as any).claims.sub, // Use authenticated user's ID
      });

      const transferRequest =
        await storage.createTransferRequest(validatedData);
      res.status(201).json(transferRequest);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res
          .status(400)
          .json({ message: "Invalid request data", errors: error.errors });
      }
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Get transfer requests for patient
  app.get(
    "/api/patient/:id/transfer-requests",
    isAuthenticated,
    async (req, res) => {
      try {
        const patientId = parseInt(req.params.id);
        const requests =
          await storage.getTransferRequestsByPatientId(patientId);
        res.json(requests);
      } catch (error) {
        res.status(500).json({ message: "Internal server error" });
      }
    },
  );

  // Get chat messages for patient
  app.get(
    "/api/patient/:id/chat-messages",
    isAuthenticated,
    async (req, res) => {
      try {
        const patientId = parseInt(req.params.id);
        const messages = await storage.getChatMessagesByPatientId(patientId);
        res.json(messages);
      } catch (error) {
        res.status(500).json({ message: "Internal server error" });
      }
    },
  );

  // Send chat message
  app.post("/api/chat-messages", isAuthenticated, async (req, res) => {
    try {
      const validatedData = insertChatMessageSchema.parse({
        ...req.body,
        patientId: (req.user as any).claims.sub, // Use authenticated user's ID
      });

      const message = await storage.createChatMessage(validatedData);

      // Simulate automatic response after a delay
      if (validatedData.isFromPatient) {
        setTimeout(async () => {
          await storage.createChatMessage({
            patientId: validatedData.patientId,
            message:
              "Thank you for your message. A pharmacy team member will respond shortly.",
            isFromPatient: false,
          });
        }, 2000);
      }

      res.status(201).json(message);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res
          .status(400)
          .json({ message: "Invalid request data", errors: error.errors });
      }
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Get pharmacy locations
  app.get("/api/pharmacy-locations", async (req, res) => {
    try {
      const locations = await storage.getPharmacyLocations();
      res.json(locations);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Get prescription stats for patient
  app.get("/api/patient/:id/stats", isAuthenticated, async (req, res) => {
    try {
      const patientId = parseInt(req.params.id);
      const prescriptions =
        await storage.getPrescriptionsByPatientId(patientId);

      const activePrescriptions = prescriptions.length;
      const readyForPickup = prescriptions.filter(
        (p) => p.status === "ready",
      ).length;

      // Calculate next refill days (simplified calculation)
      const nextRefillDays = 5; // Mock calculation

      res.json({
        activePrescriptions,
        readyForPickup,
        nextRefillDays,
      });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Prescription service routes - serve HTML forms
  app.get("/api/refill", (req, res) => {
    res.sendFile(join(__dirname, "../prescription-services/refill_form.html"));
  });

  app.get("/api/transfer", (req, res) => {
    res.sendFile(
      join(__dirname, "../prescription-services/transfer_form.html"),
    );
  });

  app.get("/api/vaccine", (req, res) => {
    res.sendFile(
      join(__dirname, "../prescription-services/vaccine_consent.html"),
    );
  });

  // App routes (for direct access)
  app.get("/app/refill", (req, res) => {
    res.sendFile(join(__dirname, "../prescription-services/refill_form.html"));
  });

  app.get("/app/transfer", (req, res) => {
    res.sendFile(
      join(__dirname, "../prescription-services/transfer_form.html"),
    );
  });

  app.get("/app/vaccine", (req, res) => {
    res.sendFile(
      join(__dirname, "../prescription-services/vaccine_consent.html"),
    );
  });

  app.get("/api/confirmation", (req, res) => {
    res.sendFile(join(__dirname, "../prescription-services/confirmation.html"));
  });

  app.get("/fax-confirmation", (req, res) => {
    res.sendFile(join(__dirname, "../prescription-services/confirmation.html"));
  });

  // Import email service functions
  const {
    sendFaxEmail,
    generateRefillPDF,
    generateTransferPDF,
    generateVaccinePDF,
  } = await import("./emailService.js");

  // Import Shopify service
  const { shopifyService } = await import("./shopifyService.js");

  // Import AmerisourceBergen service
  const { amerisourceBergenService } = await import(
    "./amerisourceBergenService.js"
  );

  // Import Multi-platform service
  const { multiPlatformService } = await import("./multiPlatformService.js");

  // POST endpoints for form submissions
  app.post(
    "/api/submit-refill",
    express.urlencoded({ extended: true }),
    async (req, res) => {
      try {
        const { first_name, last_name, dob, phone, selected_location } =
          req.body;
        const fullName = `${first_name} ${last_name}`;

        // Handle multiple medications (they come as an array)
        let medications = req.body.medications;
        if (Array.isArray(medications)) {
          medications = medications.filter((med) => med?.trim()).join("\n");
        } else if (typeof medications === "string") {
          medications = medications.trim();
        } else {
          medications = "";
        }

        // Generate PDF
        const pdfPath = generateRefillPDF(fullName, dob, medications, phone);

        // Create email body
        const emailBody = `New Refill Request:
Name: ${fullName}
DOB: ${dob}
Phone: ${phone}

Medications:
${medications}`;

        // Send fax email
        const result = await sendFaxEmail(
          selected_location.toUpperCase(),
          emailBody,
          "Refill Request",
          pdfPath,
        );

        if (result.status === "success") {
          res.redirect(
            `/fax-confirmation?type=refill&location=${selected_location}`,
          );
        } else {
          res.status(500).json({ success: false, message: result.message });
        }
      } catch (error) {
        console.error("Refill submission error:", error);
        res.status(500).json({
          success: false,
          message: "Failed to process refill request",
        });
      }
    },
  );

  app.post(
    "/api/submit-transfer",
    express.urlencoded({ extended: true }),
    async (req, res) => {
      try {
        const {
          first_name,
          last_name,
          dob,
          phone,
          selected_location,
          address1,
          address2,
          city,
          state,
          zip,
          current_pharmacy_name,
          current_pharmacy_phone,
          medications,
          other_pharmacy_name,
          other_pharmacy_phone,
        } = req.body;

        const fullName = `${first_name} ${last_name}`;
        const fullAddress =
          `${address1}, ${address2 || ""}, ${city}, ${state} ${zip}`.replace(
            ", ,",
            ",",
          );

        // Handle multiple medications
        let medicationList = medications;
        if (Array.isArray(medications)) {
          medicationList = medications.filter((med) => med?.trim()).join("\n");
        } else if (typeof medications === "string") {
          medicationList = medications.trim();
        } else {
          medicationList = "";
        }

        // Generate PDF
        const transferData = {
          ...req.body,
          address: fullAddress,
          mobile_phone: phone,
          medications: medicationList,
        };
        const pdfPath = generateTransferPDF(transferData);

        // Create email body
        const emailBody = `New Transfer Request:
Name: ${fullName}
DOB: ${dob}
Address: ${fullAddress}
Phone: ${phone}
Previous Pharmacy: ${other_pharmacy_name || current_pharmacy_name} (${other_pharmacy_phone || current_pharmacy_phone})
Medications:
${medicationList}`;

        // Send fax email - handle both 'selected_location' and 'location' field names
        const locationCode = selected_location || req.body.location;
        if (!locationCode) {
          return res.status(400).json({
            success: false,
            message: "Please select a pharmacy location",
          });
        }
        const result = await sendFaxEmail(
          locationCode.toUpperCase(),
          emailBody,
          "Transfer Request",
          pdfPath,
        );

        if (result.status === "success") {
          res.redirect(
            `/fax-confirmation?type=transfer&location=${locationCode}`,
          );
        } else {
          res.status(500).json({ success: false, message: result.message });
        }
      } catch (error) {
        console.error("Transfer submission error:", error);
        res.status(500).json({
          success: false,
          message: "Failed to process transfer request",
        });
      }
    },
  );

  app.post(
    "/api/submit-vaccine",
    express.urlencoded({ extended: true }),
    async (req, res) => {
      try {
        const { first_name, last_name, dob, location } = req.body;

        // Generate PDF
        const pdfPath = generateVaccinePDF(req.body);

        // Create email body
        const emailBody = `New vaccine consent form submitted by ${first_name} ${last_name} (DOB: ${dob}).`;

        // Send fax email
        const result = await sendFaxEmail(
          location.toUpperCase(),
          emailBody,
          "Vaccine Consent Form",
          pdfPath,
        );

        if (result.status === "success") {
          res.redirect(`/fax-confirmation?type=vaccine&location=${location}`);
        } else {
          res.status(500).json({ success: false, message: result.message });
        }
      } catch (error) {
        console.error("Vaccine submission error:", error);
        res.status(500).json({
          success: false,
          message: "Failed to process vaccine consent form",
        });
      }
    },
  );

  // OTC Products endpoints - prioritize AmerisourceBergen, fallback to Shopify
  app.get("/api/otc-products", async (req, res) => {
    try {
      const { store } = req.query;

      if (!store) {
        return res.status(400).json({
          message: "Store selection is required",
          products: [],
        });
      }

      // Store-specific configuration for AmerisourceBergen
      const storeConfig = {
        family: { customerId: process.env.AB_FAMILY_CUSTOMER_ID },
        specialty: { customerId: process.env.AB_SPECIALTY_CUSTOMER_ID },
        parlin: { customerId: process.env.AB_PARLIN_CUSTOMER_ID },
        outpatient: { customerId: process.env.AB_OUTPATIENT_CUSTOMER_ID },
      };

      // Try AmerisourceBergen first
      if (amerisourceBergenService.isConfigured()) {
        const abProducts =
          await amerisourceBergenService.getFeaturedProducts(100);
        const standardProducts = abProducts.map((product) => {
          const converted =
            amerisourceBergenService.convertToStandardProduct(product);
          return {
            ...converted,
            storeLocation: store,
            abItemNumber: product.itemNumber,
          };
        });

        return res.json({
          products: standardProducts,
          source: "AmerisourceBergen",
          store,
          message: `Live inventory from AmerisourceBergen wholesaler for ${store} pharmacy`,
        });
      }

      // Fallback to Shopify
      if (shopifyService.isConfigured()) {
        const products = await shopifyService.fetchProducts();
        return res.json({
          products,
          source: "Shopify",
          message: "Products from Shopify store",
        });
      }

      // Demo data if neither service is configured
      const mockProducts = [
        {
          id: "1",
          title: "Tylenol Extra Strength 500mg",
          description:
            "Fast-acting pain relief for headaches, muscle aches, and fever",
          price: "$8.99",
          comparePrice: "$12.99",
          image:
            "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400",
          category: "pain-relief",
          brand: "Tylenol",
          rating: 4.5,
          reviewCount: 124,
          inStock: true,
          shopifyUrl:
            "https://georgiespharmacy.com/products/tylenol-extra-strength",
        },
        {
          id: "2",
          title: "Vitamin D3 2000 IU",
          description:
            "High-potency vitamin D3 for bone health and immune support",
          price: "$15.99",
          image:
            "https://images.unsplash.com/photo-1556909114-0a5e16e77ff6?w=400",
          category: "vitamins",
          brand: "Nature Made",
          rating: 4.8,
          reviewCount: 89,
          inStock: true,
          shopifyUrl: "https://georgiespharmacy.com/products/vitamin-d3-2000iu",
        },
        {
          id: "3",
          title: "Band-Aid Flexible Fabric Bandages",
          description:
            "Flexible fabric bandages that move with you for superior comfort",
          price: "$4.99",
          image:
            "https://images.unsplash.com/photo-1603398938093-6b77de70db2c?w=400",
          category: "first-aid",
          brand: "Band-Aid",
          rating: 4.3,
          reviewCount: 67,
          inStock: true,
          shopifyUrl:
            "https://georgiespharmacy.com/products/band-aid-flexible-fabric",
        },
        {
          id: "4",
          title: "Claritin 24-Hour Allergy Relief",
          description: "Non-drowsy 24-hour relief from seasonal allergies",
          price: "$22.99",
          comparePrice: "$27.99",
          image:
            "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400",
          category: "allergy",
          brand: "Claritin",
          rating: 4.6,
          reviewCount: 156,
          inStock: true,
          shopifyUrl: "https://georgiespharmacy.com/products/claritin-24hour",
        },
        {
          id: "5",
          title: "Tums Ultra Strength Antacid",
          description:
            "Fast-acting antacid for heartburn and indigestion relief",
          price: "$6.99",
          image:
            "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=400",
          category: "digestive",
          brand: "Tums",
          rating: 4.2,
          reviewCount: 93,
          inStock: true,
          shopifyUrl:
            "https://georgiespharmacy.com/products/tums-ultra-strength",
        },
        {
          id: "6",
          title: "Robitussin DM Cough Syrup",
          description:
            "Controls cough and thins mucus for cold and flu symptoms",
          price: "$9.99",
          image:
            "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400",
          category: "cold-flu",
          brand: "Robitussin",
          rating: 4.4,
          reviewCount: 78,
          inStock: false,
          shopifyUrl: "https://georgiespharmacy.com/products/robitussin-dm",
        },
      ];

      return res.json({
        products: mockProducts,
        source: "Demo",
        message:
          "Using demo data. Configure AmerisourceBergen or Shopify credentials for live products.",
      });
    } catch (error) {
      console.error("Error fetching OTC products:", error);
      res.status(500).json({
        message: "Failed to fetch products",
        products: [],
      });
    }
  });

  app.get("/api/otc-products/search", async (req, res) => {
    try {
      const { q: query, store } = req.query;

      if (!query || typeof query !== "string") {
        return res.status(400).json({ message: "Search query is required" });
      }

      if (!store) {
        return res.status(400).json({ message: "Store selection is required" });
      }

      // Try AmerisourceBergen search first
      if (amerisourceBergenService.isConfigured()) {
        const abProducts = await amerisourceBergenService.searchProducts({
          query,
        });
        const standardProducts = abProducts.map((product) => {
          const converted =
            amerisourceBergenService.convertToStandardProduct(product);
          return {
            ...converted,
            storeLocation: store,
            abItemNumber: product.itemNumber,
          };
        });

        return res.json({
          products: standardProducts,
          source: "AmerisourceBergen",
          store,
          message: `Search results from AmerisourceBergen for "${query}"`,
        });
      }

      // Fallback to Shopify
      if (shopifyService.isConfigured()) {
        const products = await shopifyService.searchProducts(query);
        return res.json({
          products: products.map((p) => ({ ...p, storeLocation: store })),
          source: "Shopify",
          store,
        });
      }

      return res.json({
        products: [],
        message:
          "Search not available. Configure AmerisourceBergen or Shopify credentials.",
      });
    } catch (error) {
      console.error("Error searching OTC products:", error);
      res.status(500).json({
        message: "Failed to search products",
        products: [],
      });
    }
  });

  app.get("/api/otc-products/category/:category", async (req, res) => {
    try {
      const { category } = req.params;

      if (!shopifyService.isConfigured()) {
        return res.json({
          products: [],
          message:
            "Category filtering not available in demo mode. Configure Shopify credentials.",
        });
      }

      // For now, fetch all products and filter client-side
      // In a production setup, you'd use Shopify collections
      const allProducts = await shopifyService.fetchProducts();
      const filteredProducts = allProducts.filter(
        (product) => product.category === category,
      );

      res.json({ products: filteredProducts });
    } catch (error) {
      console.error("Error fetching products by category:", error);
      res.status(500).json({
        message: "Failed to fetch products by category",
        products: [],
      });
    }
  });

  // Multi-platform product sync endpoints
  app.post("/api/otc-products/sync-platforms", async (req, res) => {
    try {
      const { productId, storeLocation } = req.body;

      if (!productId || !storeLocation) {
        return res.status(400).json({
          message: "Product ID and store location are required",
        });
      }

      // Get product details from AmerisourceBergen
      const abProduct =
        await amerisourceBergenService.getProductDetails(productId);
      if (!abProduct) {
        return res.status(404).json({ message: "Product not found" });
      }

      // Convert to platform format
      const platformProduct =
        multiPlatformService.convertABProductToPlatformProduct(
          abProduct,
          storeLocation,
        );

      // Sync to all enabled platforms
      const results = await multiPlatformService.syncProductToAllPlatforms(
        platformProduct,
        storeLocation,
      );

      res.json({
        success: true,
        product: platformProduct,
        platformResults: results,
        message: "Product synced to all enabled platforms",
      });
    } catch (error) {
      console.error("Error syncing product to platforms:", error);
      res.status(500).json({
        message: "Failed to sync product to platforms",
        error: error.message,
      });
    }
  });

  app.get("/api/platforms/status", async (req, res) => {
    try {
      const status = multiPlatformService.getPlatformStatus();
      const enabledPlatforms = multiPlatformService.getEnabledPlatforms();

      res.json({
        platforms: status,
        enabledCount: enabledPlatforms.length,
        hasConfigured: multiPlatformService.hasConfiguredPlatforms(),
        enabledPlatforms: enabledPlatforms.map((p) => p.name),
      });
    } catch (error) {
      console.error("Error getting platform status:", error);
      res.status(500).json({
        message: "Failed to get platform status",
        error: error.message,
      });
    }
  });

  app.post("/api/platforms/inventory-update", async (req, res) => {
    try {
      const { updates } = req.body;

      if (!updates || !Array.isArray(updates)) {
        return res.status(400).json({
          message: "Inventory updates array is required",
        });
      }

      const results =
        await multiPlatformService.updateInventoryAllPlatforms(updates);

      res.json({
        success: true,
        results,
        message: "Inventory updated across platforms",
      });
    } catch (error) {
      console.error("Error updating inventory:", error);
      res.status(500).json({
        message: "Failed to update inventory",
        error: error.message,
      });
    }
  });

  // Product details endpoint for checkout
  app.get("/api/otc-products/details/:productId", async (req, res) => {
    try {
      const { productId } = req.params;
      const { store } = req.query;

      if (!store) {
        return res.status(400).json({ message: "Store selection is required" });
      }

      // Try to get from AmerisourceBergen first
      if (amerisourceBergenService.isConfigured()) {
        const abProduct =
          await amerisourceBergenService.getProductDetails(productId);
        if (abProduct) {
          const standardProduct =
            amerisourceBergenService.convertToStandardProduct(abProduct);
          return res.json({
            ...standardProduct,
            storeLocation: store,
            abItemNumber: abProduct.itemNumber,
            source: "AmerisourceBergen",
          });
        }
      }

      // Fallback for demo data
      const mockProduct = {
        id: productId,
        title: "Sample OTC Product",
        description: "High-quality over-the-counter medication",
        price: "$12.99",
        image:
          "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400",
        category: "general",
        brand: "Generic",
        rating: 4.5,
        reviewCount: 50,
        inStock: true,
        storeLocation: store,
        source: "Demo",
      };

      res.json(mockProduct);
    } catch (error) {
      console.error("Error fetching product details:", error);
      res.status(500).json({
        message: "Failed to fetch product details",
        error: error.message,
      });
    }
  });

  // Order processing endpoint
  app.post("/api/otc-products/order", async (req, res) => {
    try {
      const {
        productId,
        store,
        quantity,
        deliveryMethod,
        customerInfo,
        shippingAddress,
        totalAmount,
      } = req.body;

      // Generate order ID
      const orderId = `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

      // Get product details
      const product =
        await amerisourceBergenService.getProductDetails(productId);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }

      // Process payment (integrate with Stripe)
      // const paymentResult = await processStripePayment(totalAmount, customerInfo);

      // Place order with AmerisourceBergen
      const orderData = {
        customerId: process.env.AB_CUSTOMER_ID || "demo-customer",
        items: [
          {
            itemNumber: productId,
            quantity: quantity,
            unitPrice: parseFloat(
              product.unitPrice || product.contractPrice || "0",
            ),
          },
        ],
        shippingAddress:
          deliveryMethod === "delivery"
            ? shippingAddress
            : {
                name: `${customerInfo.firstName} ${customerInfo.lastName}`,
                address1: "Pharmacy Pickup",
                city: store,
                state: "NJ",
                zipCode: "00000",
              },
        paymentReference: orderId,
        deliveryMethod: deliveryMethod === "delivery" ? "standard" : "pickup",
      };

      let abOrderResult = null;
      if (amerisourceBergenService.isConfigured()) {
        try {
          abOrderResult = await amerisourceBergenService.placeOrder(orderData);
        } catch (error) {
          console.error("AmerisourceBergen order failed:", error);
          // Continue with local order processing
        }
      }

      // Update inventory across platforms
      await multiPlatformService.updateInventoryAllPlatforms([
        {
          sku: `${store}-${productId}`,
          quantity: product.inventoryQuantity - quantity,
          platform: "all",
        },
      ]);

      res.json({
        success: true,
        orderId,
        abOrderId: abOrderResult?.orderId,
        status: "confirmed",
        estimatedDelivery:
          deliveryMethod === "delivery"
            ? "2-3 business days"
            : "Ready for pickup",
        trackingNumber: abOrderResult?.trackingNumber,
        message: "Order placed successfully",
      });
    } catch (error) {
      console.error("Error processing order:", error);
      res.status(500).json({
        message: "Failed to process order",
        error: error.message,
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
