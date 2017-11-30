using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

using Foundation;
using UIKit;
using Xamarin.Forms;
using PipeTallyMobile.DataAccess;
using System.IO;
using PipeTallyMobile.iOS;

[assembly: Dependency(typeof(FileHelper))]
namespace PipeTallyMobile.iOS
{
        public class FileHelper : IFileHelper
        {
            public string GetLocalFilePath(string filename)
            {
                string docFolder = Environment.GetFolderPath(Environment.SpecialFolder.Personal);
                string libFolder = Path.Combine(docFolder, "..", "Library", "Databases");

                if (!Directory.Exists(libFolder))
                {
                    Directory.CreateDirectory(libFolder);
                }

                return Path.Combine(libFolder, filename);
            }
        }
    }
}