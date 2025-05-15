# 📖 Інструкція з підготовки проєкту

Щоб запустити цей сервер, необхідно виконати кілька простих кроків.

```bash
npm install
```
```bash
node server.js
```

Після цього — щоб зробити локальний сервер доступним ззовні через HTTPS-тунель, запустіть ngrok на відповідному порту:

```bash  
ngrok http 3000
```

Ось посилання на мій готовий запит а саме підміни відповіді.
```code
https://app.requestly.io/rules#sharedList/80613bbcfee4411187b4c81f0e6f1034-Bitcoin_new-respons
```

Далі необхідно замінити на свій url який створив ngrok и вписати в константу newUrl і зберегти
![image](https://github.com/user-attachments/assets/c0aadcd8-0df3-4bd4-9840-17c22b7fa3ee)

Запит історії вартості bitcoin повинна бути перехвачера і повернено інші дані.
