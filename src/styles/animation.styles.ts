import { css, CSSResultGroup } from 'lit';

export const animationStyles: CSSResultGroup = css`
  /* ==============================================
   * ANIMATION KEYFRAMES
   * ============================================== */

  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  /* ==============================================
   * ANIMATION UTILITIES
   * ============================================== */

  .spinning {
    animation: spin 1.5s linear infinite;
  }

  .glow-pulse {
    animation: glowPulse 2.8s ease-in-out infinite;
  }

  /* ==============================================
   * TRANSFORM UTILITIES
   * ============================================== */

  /* ==============================================
   * TRANSITION UTILITIES
   * ============================================== */

  .transition-fast {
    transition: all 0.12s ease;
  }

  .transition-medium {
    transition: all 0.18s ease;
  }

  .transition-slow {
    transition: all 0.28s ease;
  }

  .transition-transform {
    transition: transform 0.12s ease;
  }

  .transition-shadow {
    transition: box-shadow 0.12s ease;
  }

  .transition-colors {
    transition: background-color 0.12s ease, color 0.12s ease;
  }
`;
