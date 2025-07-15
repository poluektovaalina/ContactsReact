import IconPencil from '../assets/iconmonstr-pencil-filled.svg?react';
import IconTrash from '../assets/iconmonstr-trash-can-filled.svg?react';

export default function ContactItem() {
  return (
    <>
      <div className="contact_main">
        <span>Имя</span>
        <span>Фамилия</span>
        <span>Номер телефона</span>
      </div>
      <div className="contact_item">
        <span>Фиона</span>
        <span>Каралиновна</span>
        <span>+7 777 777 777</span>
        <div className="grop_ico">
            <div className="btn pen">
                <IconPencil/>
            </div>
            <div className="btn delete">
                <IconTrash/>
            </div>
        </div>
      </div>
    </>
  );
}
