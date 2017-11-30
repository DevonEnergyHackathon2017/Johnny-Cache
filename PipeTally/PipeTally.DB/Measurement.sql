CREATE TABLE dbo.Measurement
(
	MeasurementId INT NOT NULL IDENTITY,
	JobSiteId INT NOT NULL,
	PipeLength FLOAT,
	ThreadLength FLOAT,
	UseOrder INT,
	IsDamanged BIT,
	CONSTRAINT MeasurementKey PRIMARY KEY (MeasurementId),
	CONSTRAINT MeasurementJobSiteRef FOREIGN KEY (JobSiteId) REFERENCES dbo.JobSite(JobSiteId)
)
