CREATE TABLE [dbo].[MeasurementRun]
(
	[MeasurementRunId] INT NOT NULL IDENTITY,
	JobSiteId INT NOT NULL,
	MeasuredOn DATETIME NOT NULL,
	TotalWeight FLOAT,
	PipeDiameter FLOAT,
	ThreadType NVARCHAR(100),
	CONSTRAINT MeasurementRunKey PRIMARY KEY (MeasurementRunId),
	CONSTRAINT MeasurementRunJobSiteRef FOREIGN KEY (JobSiteId) REFERENCES dbo.JobSite(JobSiteId)
)
