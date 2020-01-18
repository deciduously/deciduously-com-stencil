import { Cv } from './cv';

describe('app-cv', () => {
  it('builds', () => {
    expect(new Cv()).toBeTruthy();
  });

  it('has a CvData object', () => {
    const component = new Cv();
    expect(component.data).toBeTruthy();
  })

  it('has my CV in it', () => {
    const component = new Cv();
    expect(component.data.header.subtitle).toEqual('Software Developer');
  })
});
