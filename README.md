## PipeTally beta 1.001

PipeTally is a set of connected tools intended to efficiently collect, track and store the traditionally slow, paper-based process of recording drill pipe and other downhole equipment counts, length, order, etc. 

The initial version of PipeTally utilizes both IOS and Android mobile applications, Bluetooth enabled Laser measurement tools for onsite data collection along with a Web interface for other data management tasks,  The backend consists of an extensible cloud based Web API backed by an AZURE SQL Server database.  The Mobile interfaces will function disconnected and will auto-sync data as connectivity becomes available.   

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
