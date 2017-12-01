## PipeTally beta 1.001

PipeTally is a set of connected tools intended to efficiently collect, track and store drill pipe and other downhole equipment.  It currently tracks counts, length, order, etc. It is meant to replace the current manual paper-based process that is in use today.

The initial version of PipeTally consists of an Azure SQL Server database, exposed via an Asp.Net Web API REST service, fronted by both an Angular 4 UI for data management and a cross-platform mobile app for in-field data collection.

The mobile applications are designed to accept measurement input entered either manually, or - preferably - via bluetooth capable laser measurement tool.  Further, the mobile applications support offline data collection with mobile storage with automatic synchronization of data to the cloud backend.

![Image of System Diagram](https://github.com/glmblue/Johnny-Cache/blob/master/PipeTallySystem.png)

See it in Action!
[![Johnny Cache](https://github.com/glmblue/Johnny-Cache/blob/master/DemoThumb.png?raw=true)](https://youtu.be/S92_YsLf224)

### Prerequisites

Microsoft .NET Framework Version 4.6.01055
Xamarin   4.7.10.38
Xamarin.Android SDK   8.0.2.1 
Xamarin.iOS and Xamarin.Mac SDK   11.3.0.47
SQL Server Express or Developer editions 2017
Node.JS 7+ 
Angular 4 / Angular CLI 1.0
Git 2.0


### Installing for Local Development:  please see the above prerequisites
Clone or Download this Repo.
Install SQL Server Developer edition, Publish included database project to local instance, ensure db service is running
Start IIS Express for API: 'http port: 65095'
Run local IOS or Android Emulators
Start Node Server for Web App: 'http port: 4200'


## Deployment
Your favorite App Store for IOS or Android applications:
Web API / APP: MS Build / Currently Manual Publish


## Authors

*Initial work*
 * **Phillip Martin**
 * **Travis Frels**
 * **John Stinson**
 * **Matthew Miller**
 * **Gene Mayfield**


## License

This project is licensed under the MIT License - see (LICENSE.md) file for details

## Acknowledgments

* Devon Energy IT Management Team for their tireless focus on innovation
