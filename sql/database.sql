/* 
    ==============================POSTGRESQL======================================
    CREATE TABLE TMAETRACAL(
	Cod_Trabajo integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    Mat_Trabajo varchar NOT NULL,
    Prof_Trabajo varchar NOT NULL,
    Act_Trabajo varchar NOT NULL,
    Des_Trabajo varchar NOT NULL,
    FeI_Trabajo varchar NOT NULL,
    FeC_Trabajo varchar NOT NULL,
    Cur_Trabajo varchar NOT NULL
);

SELECT * FROM TMAETRACAL;

TRUNCATE TABLE TMAETRACAL RESTART IDENTITY; */


/*================================SQL SERVER========================================*/
CREATE TABLE [dbo].[TMAETRACAL](
	[Cod_Trabajo] [int] IDENTITY(1,1) NOT NULL,
	[Mat_Trabajo] [varchar](2000) NULL,
	[Prof_Trabajo] [varchar](2000) NULL,
	[Act_Trabajo] [varchar](2000) NULL,
	[Des_Trabajo] [varchar](2000) NULL,
	[FeI_Trabajo] [varchar](2000) NULL,
	[FeC_Trabajo] [varchar](2000) NULL,
	[Cur_Trabajo] [varchar](2000) NULL
 CONSTRAINT [PK_TMAETRACAL] PRIMARY KEY CLUSTERED 
(
	[Cod_Trabajo] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
