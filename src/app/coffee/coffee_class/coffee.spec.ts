import { Coffee } from './coffee';

describe('Coffee', () => {
  it('should create an instance', () => {
    expect(new Coffee(1, 'name', 'type', 'region', 'taste', 1800, 'image')).toBeTruthy();
  });
});
