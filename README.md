## List Alumnos


![](./img/2023-09-27-21-01-38.png)
![](./img/2023-09-27-21-34-01.png)


Una lista de alumnos dada una lista json.

## List Alumnos

- Promedio se marca en rojo si es menor a 8
- Promedio se marca en verde si es mayor a 8
- Minor no aparece si no existe
- Credits no aparece si no existe
- Se puede agregar nuevos estudiantes
- Automaticamente incluye la senioridad usando pipes


## Deployment


```
ng build --configuration=production --base-href "https://nenewang.github.io/lista-alumnos/"
sudo npm install -g angular-cli-ghpages
ngh --dir dist/lista-alumnos

npx angular-cli-ghpages --dir=dist/lista-alumnos


```

Deployed at:

```
https://nenewang.github.io/lista-alumnos
```



