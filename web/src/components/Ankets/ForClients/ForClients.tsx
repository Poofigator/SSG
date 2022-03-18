import {
  Content,
  Input,
  InputField,
  MobileChanger,
  ComputerChanger,
  Policy,
  SendBtn,
} from "./styles";
import { useState } from "react";

const FC_body = () => {
  const [fullName, setFullName] = useState("");
  const [organization, setOrganization] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [agreement, setAgreement] = useState(false);

  const phoneRe = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
  const emailRe = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

  const url = "http://127.0.0.1:8000/api/employer/";
  const data = {
    full_name: fullName,
    organization: organization,
    email: email || "Нет",
    phone: phone || "Нет",
    message: message || "Нет",
  };
  async function submit(url: string, data: any) {
    if (!fullName) {
      alert("Введите ФИО");
    } else {
      if (!organization) {
        alert("Введите название организации");
      } else {
        if (!(phoneRe.test(phone) || emailRe.test(email))) {
          alert("Номер или email введены не корректно");
        }
        if (!agreement) {
          alert(
            "Для того, чтобы оставить заявку, вам необходимо согласиться на обработку персональных данных"
          );
        } else {
          try {
            const response = await fetch(url, {
              method: "POST", // или 'PUT'
              body: JSON.stringify(data), // данные могут быть 'строкой' или {объектом}!
              headers: {
                "Content-Type": "application/json",
              },
            });
            if (response.status === 201) {
              alert(`Заявка будет рассмотрена в ближайшее время.`);
            } else {
              if (response.status === 400) {
                alert(
                  `Похоже, что вы отправили слишком много заявок, подождите`
                );
              } else {
                alert(`${response.status}`);
              }
            }
          } catch (error) {
            alert(error);
            console.error("Ошибка:", error);
          }
        }
      }
    }
  }

  return (
    <Content>
      <h4>Анкета клиента</h4>
      <div>
        <MobileChanger>
          <p>Фамилия Имя Отчество</p>
        </MobileChanger>
        <ComputerChanger>
          <p>ФИО</p>
        </ComputerChanger>
        <Input
          placeholder="ФИО"
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
        ></Input>
      </div>
      <div>
        <MobileChanger>
          <p>Наименование организации</p>
        </MobileChanger>
        <ComputerChanger>
          <p>Организация</p>
        </ComputerChanger>
        <Input
          placeholder="Наименование организации"
          value={organization}
          onChange={(event) => setOrganization(event.target.value)}
        ></Input>
      </div>
      <div>
        <p>e-mail</p>
        <Input
          placeholder="ivan@mail.ru"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        ></Input>
      </div>
      <div>
        <p>Телефон</p>
        <Input
          placeholder="+7-888-888-88-88"
          type="tel"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        ></Input>
      </div>
      <div>
        <p>Сообщение</p>
        <InputField
          placeholder="Сообщение"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        ></InputField>
      </div>
      <Policy>
        <p>
          Я согласен с обработкой предоставленных мною персональных данных с
          целью систематизации и хранения их в «СтаффСинтезГруппы» в течение 3
          (трех) лет.* Я согласен на передачу данных третьим лицам.* Я
          предупрежден о последствиях указания некорректных данных в анкете. В
          случае предоставления мною некорректных данных ответственность с
          «СтаффСинтезГруппы» снимается.*
        </p>
        <Input
          placeholder="Сообщение"
          type="checkbox"
          checked={agreement}
          onChange={(event) => setAgreement(event.target.checked)}
        ></Input>
      </Policy>
      <SendBtn onClick={() => submit(url, data)}>Отправить</SendBtn>
    </Content>
  );
};

export default FC_body;
