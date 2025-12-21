import { describe, expect, it } from 'vitest';

describe('react-quill-new (browser)', () => {
  it('loads in a real browser context', () => {
    expect(typeof window).toBe('object');
    expect(typeof document).toBe('object');
  });
});
