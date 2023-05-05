const getOpeningHours = require('../src/getOpeningHours');

const textClose = 'The zoo is closed';
describe('Testes da função getOpeningHours', () => {
  it('Se ao não passar parâmetros deve retornar um objeto', () => {
    const atual = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(getOpeningHours()).toEqual(atual);
  });
  it('Para os argumentos Monday e 09:00-AM deve retornar uma string', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe(textClose);
  });
  it('Para os argumentos Tuesday e 09:00-AM deve retornar The zoo is open', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });
  it('Para os argumentos Wednesday e 09:00-AM deve retornar The zoo is closed', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe(textClose);
  });
  it('Para os argumentos Thu e 09:00-AM deve retornar um erro', () => {
    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrow(Error('The day must be valid. Example: Monday'));
  });
  it('Para os argumentos Friday e 09:00-ZM deve retornar um erro', () => {
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrow(Error('The abbreviation must be \'AM\' or \'PM\''));
  });
  it('Para os argumentos Saturday e 09:c0-AM deve retornar um erro', () => {
    expect(() => getOpeningHours('Sunday', '09:c0-AM')).toThrow(Error('The minutes should represent a number'));
  });
  it('Para os argumentos Monday e 13:00-AM deve retornar um erro', () => {
    expect(() => getOpeningHours('Monday', '13:00-AM')).toThrow(Error('The hour must be between 0 and 12'));
  });
  it('Para os argumentos Tuesday e 13:00-AM deve retornar um erro', () => {
    expect(() => getOpeningHours('Tuesday', '09:60-AM')).toThrow(Error('The minutes must be between 0 and 59'));
  });
});
