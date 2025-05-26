"use client";
import { useState } from 'react';

/**
 * @description
 * Hook to detect and prevent spamming actions such as button clicks.
 * 
 * @param {SpamGuardProps} {
 *  limit: The maximum number of actions allowed in a given `timeFrame`.
 *  timeFrame: The time frame in milliseconds, default is 2000 (2 seconds).
 *  onSpamDetected: A callback function that will be called when spam is detected.
 * }
 * @returns {(checkSpam: () => boolean)} A function to call for every action. It returns true if the action is allowed, false if it's not.
 */

type SpamGuardProps = {
  limit?: number;
  timeFrame?: number;
  onSpamDetected?: () => void;
};

export function useSpamGuard({limit = 1, timeFrame = 2000, onSpamDetected}: SpamGuardProps) {
  const [actions, setActions] = useState<number[]>([]);

  const checkSpam = () => {
    const now = Date.now();
    const updatedActions = actions.filter((t) => now - t < timeFrame);

    if (updatedActions.length >= limit) {
      onSpamDetected?.();
      return false;
    }

    setActions([...updatedActions, now]);
    return true;
  };

  return checkSpam;
}
