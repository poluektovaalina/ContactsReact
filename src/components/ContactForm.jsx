export default function ContactForm() {
  return (
    <>
      <form action="">
        <div className="group">
          <input type="text" placeholder="Имя" />
          <input type="text" placeholder="Фамилия" />
          <input type="number" placeholder="Номер телефона" />
        </div>
      </form>
      <div type="submit" className="button">
        <span>Добавить контакт</span>
      </div>
    </>
  );
}
