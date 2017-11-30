CREATE TABLE dbo.Measurement
(
	MeasurementId INT NOT NULL IDENTITY, /* Run */
	JobSiteId INT NOT NULL,
	Joint INT,
	PipeLength FLOAT,
	ThreadLength FLOAT,
	ItemDescription NVARCHAR(MAX),
	TopThread NVARCHAR(MAX),
	IsDamaged BIT,
	CONSTRAINT MeasurementKey PRIMARY KEY (MeasurementId),
	CONSTRAINT MeasurementJobSiteRef FOREIGN KEY (JobSiteId) REFERENCES dbo.JobSite(JobSiteId)
)
