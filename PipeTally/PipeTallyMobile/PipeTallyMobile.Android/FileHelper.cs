using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

using PipeTallyMobile.DataAccess;
using System.IO;
using Xamarin.Forms;
using PipeTallyMobile.Droid;

[assembly: Dependency(typeof(FileHelper))]
namespace PipeTallyMobile.Droid
{
    public class FileHelper : IFileHelper
    {
        public string GetLocalFilePath(string filename)
        {
            string path = Environment.GetFolderPath(Environment.SpecialFolder.Personal);
            return Path.Combine(path, filename);
        }
    }
}