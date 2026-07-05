// ============================================================================
// Charter Program — source of truth for spots remaining + cohort deadline
// ----------------------------------------------------------------------------
// When a client signs, decrement CHARTER_SPOTS_REMAINING and redeploy.
// When the cohort closes (either count hits 0 or CHARTER_DEADLINE passes),
// set CHARTER_IS_OPEN to false and the UI flips to "waitlist" mode.
// ============================================================================

export const CHARTER_SPOTS_TOTAL = 10;
export const CHARTER_SPOTS_REMAINING = 7;
export const CHARTER_DEADLINE = "June 30, 2026";
export const CHARTER_IS_OPEN = true;

// Charter monthly rate lock — what Charter Members pay forever on the Growth tier.
// If you raise the regular Growth price later, this stays the same.
export const CHARTER_GROWTH_RATE = 997;
