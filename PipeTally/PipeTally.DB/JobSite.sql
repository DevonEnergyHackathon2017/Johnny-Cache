﻿CREATE TABLE dbo.JobSite
(
	JobSiteId INT NOT NULL IDENTITY,
	Title NVARCHAR(100),
	Latitude FLOAT,
	Longitude FLOAT,
	CONSTRAINT JobSiteKey PRIMARY KEY (JobSiteId)
)
