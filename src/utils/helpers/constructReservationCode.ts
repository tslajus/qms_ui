function constructReservationCode(inputValue: string): string {
  const currentDate = new Date().toISOString().split("T")[0];
  return `${currentDate}-${inputValue}`;
}

export default constructReservationCode;
