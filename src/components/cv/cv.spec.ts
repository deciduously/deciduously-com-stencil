import { Cv } from './cv';

describe('app-cv', () => {
  it('builds', () => {
    expect(new Cv()).toBeTruthy();
  });

  it('has a CvData object', () => {
    const component = new Cv();
    expect(component.data).toBeTruthy();
  })

  it('has my name in it', () => {
    const component = new Cv();
    expect(component.data.name).toEqual('Ben Lovy');
  })
});
