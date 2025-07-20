// Critical CSS component for above-the-fold content
export const CriticalCSS = () => (
  <style dangerouslySetInnerHTML={{
    __html: `
      /* Critical above-the-fold styles */
      .header-nav {
        background: #A92A2A;
        height: 80px;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 50;
      }
      
      .hero-section {
        background: linear-gradient(135deg, #7c2d12, #dc2626);
        min-height: 100vh;
        padding-top: 80px;
        color: white;
      }
      
      .hero-content {
        max-width: 1280px;
        margin: 0 auto;
        padding: 4rem 1.5rem;
        text-align: center;
      }
      
      .hero-title {
        font-size: 3rem;
        font-weight: 700;
        line-height: 1.1;
        margin-bottom: 1.5rem;
      }
      
      .hero-subtitle {
        font-size: 1.25rem;
        margin-bottom: 2rem;
        opacity: 0.9;
      }
      
      .cta-buttons {
        display: flex;
        gap: 1rem;
        justify-content: center;
        flex-wrap: wrap;
      }
      
      .btn-primary {
        background: white;
        color: #7c2d12;
        padding: 0.75rem 2rem;
        border-radius: 0.5rem;
        font-weight: 600;
        text-decoration: none;
        transition: transform 0.2s;
      }
      
      .btn-primary:hover {
        transform: translateY(-2px);
      }
      
      @media (max-width: 768px) {
        .hero-title { font-size: 2rem; }
        .hero-content { padding: 2rem 1rem; }
        .cta-buttons { flex-direction: column; align-items: center; }
      }
    `
  }} />
);

export default CriticalCSS;