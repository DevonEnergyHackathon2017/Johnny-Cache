using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web.Http;
using System.Web.Http.Results;
using System.Web.OData.Results;
using Moq;
using NUnit.Framework;
using PipeTally.Controllers;
using PipeTally.Services.Abstract;
using PipeTally.DataModel;

namespace PipeTally.TEST.Controllers
{
    [TestFixture]
    public class JobSiteControllerTests
    {
        [OneTimeSetUp]
        public void SetUp()
        {
        }

        [Test]
        public void DeleteRecordNotFound()
        {
            //Setup
            var jobSiteSvcMock = new Mock<IJobSiteService>();
            jobSiteSvcMock.Setup(x => x.Delete(1)).Returns(false); //this will trigger not found
            var dataModelMock = new Mock<IDataModel>();

            //Execute
            var target = new JobSiteController(jobSiteSvcMock.Object, dataModelMock.Object);
            var results = target.Delete(1);

            //Evalute
            Assert.IsInstanceOf<NotFoundResult>(results);
        }

        [Test]
        public void DeleteSuccess()
        {
            //Setup
            var jobSiteSvcMock = new Mock<IJobSiteService>();
            jobSiteSvcMock.Setup(x => x.Delete(1)).Returns(true);
            var dataModelMock = new Mock<IDataModel>();

            //Execute
            var target = new JobSiteController(jobSiteSvcMock.Object, dataModelMock.Object);
            var results = target.Delete(1);

            //Evalute
            dataModelMock.Verify(x => x.SaveChanges(), Times.Once);
            Assert.IsInstanceOf<StatusCodeResult>(results);
            Assert.AreEqual(HttpStatusCode.NoContent, ((StatusCodeResult) results).StatusCode);
        }

        [Test]
        public void DeleteExceptionThrown()
        {
            //Setup
            var jobSiteSvcMock = new Mock<IJobSiteService>();
            jobSiteSvcMock.Setup(x => x.Delete(1)).Throws<Exception>();
            var dataModelMock = new Mock<IDataModel>();
            //Execute
            var target = new JobSiteController(jobSiteSvcMock.Object, dataModelMock.Object);
            var results = target.Delete(1);
            //Evaluate
            Assert.IsInstanceOf<ExceptionResult>(results);
        }

        [Test]
        public void PatchRecordNotFound()
        {
            //Setup
            var jobSiteSvcMock = new Mock<IJobSiteService>();
            jobSiteSvcMock.Setup(x => x.Update(It.IsAny<JobSite>())).Returns(false); //this will trigger not found
            var dataModelMock = new Mock<IDataModel>();

            //Execute
            var target = new JobSiteController(jobSiteSvcMock.Object, dataModelMock.Object);
            var results = target.Patch(new JobSite());

            //Evalute
            Assert.IsInstanceOf<NotFoundResult>(results);
        }

        [Test]
        public void PatchSuccess()
        {
            //Setup
            var jobSiteSvcMock = new Mock<IJobSiteService>();
            jobSiteSvcMock.Setup(x => x.Update(It.IsAny<JobSite>())).Returns(true);
            var dataModelMock = new Mock<IDataModel>();

            //Execute
            var target = new JobSiteController(jobSiteSvcMock.Object, dataModelMock.Object);
            var results = target.Patch(new JobSite());

            //Evalute
            dataModelMock.Verify(x => x.SaveChanges(), Times.Once);
            Assert.IsInstanceOf<UpdatedODataResult<JobSite>>(results);
        }

        [Test]
        public void PatchExceptionThrown()
        {
            //Setup
            var jobSiteSvcMock = new Mock<IJobSiteService>();
            jobSiteSvcMock.Setup(x => x.Update(It.IsAny<JobSite>())).Throws<Exception>();
            var dataModelMock = new Mock<IDataModel>();
            //Execute
            var target = new JobSiteController(jobSiteSvcMock.Object, dataModelMock.Object);
            var results = target.Patch(new JobSite());
            //Evaluate
            Assert.IsInstanceOf<ExceptionResult>(results);
        }

        [Test]
        public void GetSuccess()
        {
            //Setup
            var jobSiteSvcMock = new Mock<IJobSiteService>();
            var jobSiteList = new List<JobSite>
            {
                new JobSite
                {
                    JobSiteId = 1 //What the query is looking for.
                }
            };
            IQueryable<JobSite> jobSiteQueryable = jobSiteList.AsQueryable();
            jobSiteSvcMock.Setup(x => x.Read()).Returns(jobSiteQueryable);
            var dataModelMock = new Mock<IDataModel>();

            //Execute
            var target = new JobSiteController(jobSiteSvcMock.Object, dataModelMock.Object);
            var results = target.Get();

            //Evalute
            Assert.IsInstanceOf<IQueryable<JobSite>>(results);
        }

        [Test]
        public void GetSuccess_WithRecord()
        {
            //Setup
            var jobSiteSvcMock = new Mock<IJobSiteService>();
            var jobSiteList = new List<JobSite>
            {
                new JobSite
                {
                    JobSiteId = 1 //What the query is looking for.
                }
            };
            IQueryable<JobSite> jobSiteQueryable = jobSiteList.AsQueryable();
            jobSiteSvcMock.Setup(x => x.Read()).Returns(jobSiteQueryable);
            var dataModelMock = new Mock<IDataModel>();

            //Execute
            var target = new JobSiteController(jobSiteSvcMock.Object, dataModelMock.Object);
            var results = target.Get(1);
            
            //Evalute
            Assert.IsInstanceOf<SingleResult<JobSite>>(results);
            Assert.IsTrue(results.Queryable.Any());
        }

        [Test]
        public void GetSuccess_WithNoRecord()
        {
            //Setup
            var jobSiteSvcMock = new Mock<IJobSiteService>();
            var jobSiteList = new List<JobSite>
            {
                new JobSite
                {
                    JobSiteId = 2 
                }
            };
            IQueryable<JobSite> jobSiteQueryable = jobSiteList.AsQueryable();
            jobSiteSvcMock.Setup(x => x.Read()).Returns(jobSiteQueryable);
            var dataModelMock = new Mock<IDataModel>();

            //Execute
            var target = new JobSiteController(jobSiteSvcMock.Object, dataModelMock.Object);
            var results = target.Get(1);

            //Evalute
            Assert.IsInstanceOf<SingleResult<JobSite>>(results);
            Assert.IsFalse(results.Queryable.Any());
        }

        [Test]
        public void PostSuccess()
        {
            //Setup
            var jobSiteSvcMock = new Mock<IJobSiteService>();
            jobSiteSvcMock.Setup(x => x.Create(It.IsAny<JobSite>()));
            var dataModelMock = new Mock<IDataModel>();

            //Execute
            var target = new JobSiteController(jobSiteSvcMock.Object, dataModelMock.Object);
            var results = target.Post(new JobSite());

            //Evalute
            dataModelMock.Verify(x => x.SaveChanges(), Times.Once);
            Assert.IsInstanceOf<CreatedODataResult<JobSite>>(results);
        }

        [Test]
        public void PostExceptionThrown()
        {
            //Setup
            var jobSiteSvcMock = new Mock<IJobSiteService>();
            jobSiteSvcMock.Setup(x => x.Delete(1)).Throws<Exception>();
            var dataModelMock = new Mock<IDataModel>();
            //Execute
            var target = new JobSiteController(jobSiteSvcMock.Object, dataModelMock.Object);
            var results = target.Delete(1);
            //Evaluate
            Assert.IsInstanceOf<ExceptionResult>(results);
        }
    }
}