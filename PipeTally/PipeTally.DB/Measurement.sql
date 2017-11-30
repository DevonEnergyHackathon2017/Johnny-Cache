CREATE TABLE [dbo].[Measurement]
(
	[MeasurementId] INT NOT NULL IDENTITY,
	[MeasurementRunId] INT NOT NULL,
	PipeLength FLOAT,
	ThreadLength FLOAT,
	UseOrder INT,
	IsDamanged BIT,
	CONSTRAINT MeasurementKey PRIMARY KEY (MeasurementId),
	CONSTRAINT MeasurementMeasurementRunRef FOREIGN KEY ([MeasurementRunId]) REFERENCES [dbo].[MeasurementRun]([MeasurementRunId])
)
