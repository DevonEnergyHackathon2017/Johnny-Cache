CREATE TABLE dbo.JobSite
(
	JobSiteId INT NOT NULL IDENTITY,
	Title NVARCHAR(100),
	Latitude FLOAT,
	Longitude FLOAT,
	TotalWeight INT,
	Grade NVARCHAR(100),
	InnerDiameter FLOAT,
	OuterDiameter FLOAT,
	ThreadType NVARCHAR(100),
	CONSTRAINT JobSiteKey PRIMARY KEY (JobSiteId)
)
