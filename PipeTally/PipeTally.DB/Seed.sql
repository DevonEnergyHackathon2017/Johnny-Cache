USE [PipeTally]
GO
SET IDENTITY_INSERT [dbo].[JobSite] ON 
GO
INSERT [dbo].[JobSite] ([JobSiteId], [Title], [Latitude], [Longitude], [TotalWeight], [Grade], [InnerDiameter], [OuterDiameter], [ThreadType]) VALUES (1, N'Large Producer', 11.22, 22.33, 123, N'A', 2, 4, N'Casing')
GO
INSERT [dbo].[JobSite] ([JobSiteId], [Title], [Latitude], [Longitude], [TotalWeight], [Grade], [InnerDiameter], [OuterDiameter], [ThreadType]) VALUES (2, N'Medium Producer', 33.44, 44.55, 321, N'B', 4, 6, N'Casing')
GO
INSERT [dbo].[JobSite] ([JobSiteId], [Title], [Latitude], [Longitude], [TotalWeight], [Grade], [InnerDiameter], [OuterDiameter], [ThreadType]) VALUES (3, N'Small Producer', 55.66, 66.77, 4321, N'C', 6, 8, N'Casing')
GO
SET IDENTITY_INSERT [dbo].[JobSite] OFF
GO
SET IDENTITY_INSERT [dbo].[Measurement] ON 
GO
INSERT [dbo].[Measurement] ([MeasurementId], [JobSiteId], [Joint], [PipeLength], [ThreadLength], [ItemDescription], [TopThread], [IsDamaged]) VALUES (1, 1, 500, 22, 33, N'Description', N'Casing', 1)
GO
INSERT [dbo].[Measurement] ([MeasurementId], [JobSiteId], [Joint], [PipeLength], [ThreadLength], [ItemDescription], [TopThread], [IsDamaged]) VALUES (2, 1, 499, 44, 55, N'DescripDescrip', N'Casing', 0)
GO
INSERT [dbo].[Measurement] ([MeasurementId], [JobSiteId], [Joint], [PipeLength], [ThreadLength], [ItemDescription], [TopThread], [IsDamaged]) VALUES (3, 1, 498, 55, 66, N'Descripto', N'Casing', 1)
GO
INSERT [dbo].[Measurement] ([MeasurementId], [JobSiteId], [Joint], [PipeLength], [ThreadLength], [ItemDescription], [TopThread], [IsDamaged]) VALUES (4, 1, 497, 22, 33, N'Destructo', N'Casing', 1)
GO
INSERT [dbo].[Measurement] ([MeasurementId], [JobSiteId], [Joint], [PipeLength], [ThreadLength], [ItemDescription], [TopThread], [IsDamaged]) VALUES (5, 2, 500, 11, 22, N'Tubular', N'Casing', 0)
GO
INSERT [dbo].[Measurement] ([MeasurementId], [JobSiteId], [Joint], [PipeLength], [ThreadLength], [ItemDescription], [TopThread], [IsDamaged]) VALUES (6, 2, 499, 33, 44, N'Totally', N'Casing', 0)
GO
INSERT [dbo].[Measurement] ([MeasurementId], [JobSiteId], [Joint], [PipeLength], [ThreadLength], [ItemDescription], [TopThread], [IsDamaged]) VALUES (7, 2, 498, 55, 66, N'Description', N'Casing', 0)
GO
INSERT [dbo].[Measurement] ([MeasurementId], [JobSiteId], [Joint], [PipeLength], [ThreadLength], [ItemDescription], [TopThread], [IsDamaged]) VALUES (8, 3, 500, 33, 44, N'Description', N'Casing', 0)
GO
INSERT [dbo].[Measurement] ([MeasurementId], [JobSiteId], [Joint], [PipeLength], [ThreadLength], [ItemDescription], [TopThread], [IsDamaged]) VALUES (9, 3, 499, 1, 2, N'Descripyo', N'Casing', 0)
GO
INSERT [dbo].[Measurement] ([MeasurementId], [JobSiteId], [Joint], [PipeLength], [ThreadLength], [ItemDescription], [TopThread], [IsDamaged]) VALUES (10, 3, 498, 3, 4, N'Description', N'Casing', 0)
GO
SET IDENTITY_INSERT [dbo].[Measurement] OFF
GO
