USE [Proyecto]
GO

/****** Object:  Table [dbo].[Vehiculo]    Script Date: 12/10/2025 18:38:20 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Mantenimiento](
	idMant INT IDENTITY(1,1) PRIMARY KEY,
	Descripcion VARCHAR(MAX) NOT NULL,
	FechaAnterior DATE NOT NULL,
	FechaProx DATE NOT NULL
	);

CREATE TABLE [dbo].[Colores](
	IdColor INT IDENTITY(1,1) PRIMARY KEY,
	Color VARCHAR(64) NOT NULL,
	ValorHex NVARCHAR(64) NOT NULL
	);
CREATE TABLE [dbo].[Errores](
	IdError INT IDENTITY(1,1) PRIMARY KEY,
	CodError INT NOT NULL,
	Descripcion VARCHAR(max) NOT NULL
	);
CREATE TABLE [dbo].[Vehiculo](
	idVehiculo INT IDENTITY(1,1) PRIMARY KEY,
	Modelo VARCHAR(64) NOT NULL,
	idColor INT NOT NULL,
	idMantenimiento INT NOT NULL,
	Marca VARCHAR(64) NOT NULL,
	FOREIGN KEY (idColor) REFERENCES Colores(IdColor),
	FOREIGN KEY (idMantenimiento) REFERENCES Mantenimiento(idMant)
	);

