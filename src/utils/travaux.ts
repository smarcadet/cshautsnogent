/**
 * Workflow d'un chantier
 */
export const steps = [
  "sujet",
  "vote",
  "devis",
  "entreprise",
  "travaux",
  "reception",
] as const;

export type TravauxStatus = (typeof steps)[number];

/**
 * Libellés affichés à l'utilisateur
 */
export const statusLabels: Record<
  TravauxStatus,
  string
> = {
  sujet: "Sujet identifié",
  vote: "Vote réalisé",
  devis: "Devis reçus",
  entreprise: "Entreprise sélectionnée",
  travaux: "Travaux en cours",
  reception: "Réception des travaux",
};

/**
 * Icônes de la jauge
 */
export const statusIcons = {
  completed: "✓",
  current: "●",
  blocked: "⛔",
  pending: "○",
}

/**
 * Arai labels
 */
export const stateLabels = {
  completed: "terminé",
  current: "en cours",
  blocked: "bloqué",
  pending: "en attente",
} as const;

/**
 * Etat visuel d'une étape
 */
export function getStepState(
  currentStatus: TravauxStatus,
  step: TravauxStatus,
  blocked = false,
) {

  const currentIndex =
    steps.indexOf(currentStatus);

  const stepIndex =
    steps.indexOf(step);

  if (
    blocked &&
    step === currentStatus
  ) {
    return "blocked";
  }

  if (stepIndex < currentIndex) {
    return "completed";
  }

  if (stepIndex === currentIndex) {
    return "current";
  }

  return "pending";
}
