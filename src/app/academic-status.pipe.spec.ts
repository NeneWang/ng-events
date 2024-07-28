import { AcademicStatusPipe } from './academic-status.pipe';

describe('AcademicStatusPipe', () => {
  let pipe: AcademicStatusPipe;

  beforeEach(() => {
    pipe = new AcademicStatusPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it("Deberia devolver freshman para creditos menos de 20", () => {
    const result = pipe.transform(20);
    expect(result).toBe('Freshman');
  });

  it('Deberia devolver "Sophomore" para creditos >=30 y menor a 60', () => {
    const result = pipe.transform(45);
    expect(result).toBe('Sophomore');
  });

});
