/**
 * Fait défiler la page jusqu'à l'élément `id` (une section du CV).
 * Défilement doux, sauf si l'utilisateur demande moins d'animations.
 * Le décalage sous la navigation collante vient du `scroll-margin-top` des sections.
 */
export function scrollToSection(id: string): void {
  const element = document.getElementById(id);
  if (!element) {
    return;
  }

  const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  element.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
}
