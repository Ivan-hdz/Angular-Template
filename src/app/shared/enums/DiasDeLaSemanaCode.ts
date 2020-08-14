// Representacion en bits de los dias de la semana
// empezando por domingo (bit 0) y terminando en sabado (bit 6)
export enum DiasDeLaSemanaCode {
  TODOS = '1111111',
  FINES_SEMANA = '1000001',
  ENTRE_SEMANA = '0111110',
  LUNES_JUEVES = '0111100',
  LUNES = '0100000',
  MARTES = '0010000',
  MIERCOLES = '0001000',
  JUEVES = '0000100',
  VIERNES = '0000010',
  SABADO = '0000001',
  DOMINGO = '1000000',
}
