CREATE TABLE dbo.JobSite
(
	JobSiteId INT NOT NULL IDENTITY,
	Title NVARCHAR(100),
	Latitude FLOAT,
	Longitude FLOAT,
	TotalWeight FLOAT,
	PipeDiameter FLOAT,
	ThreadType NVARCHAR(100),
	CONSTRAINT JobSiteKey PRIMARY KEY (JobSiteId)
)
