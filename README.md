<h1 align="center">Express Typescript Leal Test</h1>

<p align="center">
  With Skeleton for typescript services based on express
</p>

## Table of Contents

- [Installing](#installing)
- [Building](#building)
- [Testing](#testing)
- [Linting](#linting)
- [Contributing](#contributing)
- [LocalRun](#LocalRun)
- [Cosas a tener en cuenta](#CosasAtenerEnCuenta)

## Installing

```bash
nvm install 18.0.0
nvm use
npm install npm@8.3.0 -g
npm install
```

## Building

```bash
npm run build
```

## Linting

Run the linter

```bash
npm run lint
```

Fix lint issues automatically

```bash
npm run lint:fix
```
## LocalRun

Para correr proyecto en local. (Modo debugging con start:dev)
La db es MongoDB Atlas, por ende la conexion se hace automática con el user y pass :D

```bash
npm start
npm run start:dev 
```
## CosasAtenerEnCuenta

El id del usuario de pruebas que se puede usar es
```bash
64638513bd8287d6f70fa3af
```

El id del comercio de pruebas (Texaco) es
```bash
6460e9d071235830d1c5064d
Tener en cuenta que en texaco la conversion tenida en cuenta es 
  conversion_rate_points = 1000
  conversion_rate_coins = 1200
```
El id de las branches (Texaco) es
```bash
Sucursal 1: 64638875bd8287d6f70fa3b0
Sucursal 2: 6463888cbd8287d6f70fa3b1
```

Las campañas no están creadas para esas sucursales, la idea sería que se creen y se pruebe el funcionamiento a medida que se cargan facturas, revisando si el usuario acumula puntos/coins/ambas o nada.

<a href=”https://lucid.app/lucidchart/be7d849c-0ed4-4431-97fe-59ea52df89b3/edit?viewport_loc=-136%2C109%2C3328%2C1582%2C0_0&invitationId=inv_885fac10-e146-410b-930d-7af39a185d09”>Gráficos</a>