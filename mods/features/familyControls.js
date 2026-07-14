import { configRead } from '../config.js';

const isKidsMode = () => configRead('familyKidsMode');

console.log('[TizenTube Family Controls] Loaded', {
  kidsMode: isKidsMode(),
  blockedKeywords: configRead('familyBlockedKeywords'),
  removeShorts: configRead('familyRemoveShorts'),
  disableAutoplay: configRead('familyDisableAutoplay')
});