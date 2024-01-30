import React from 'react';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const Skills = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Navigate back to the previous page
  };


  const skillsCategories = {
    "Browsers": [
      "<img src='https://img.shields.io/badge/Edge-0078D7?style=for-the-badge&logo=Microsoft-edge&logoColor=white' alt='Edge'/>",
      "<img src='https://img.shields.io/badge/Firefox-FF7139?style=for-the-badge&logo=Firefox-Browser&logoColor=white' alt='Firefox'/>",
      "<img src='https://img.shields.io/badge/Google%20Chrome-4285F4?style=for-the-badge&logo=GoogleChrome&logoColor=white' alt='Google Chrome'/>",
      "<img src='https://img.shields.io/badge/Internet%20Explorer-0076D6?style=for-the-badge&logo=Internet%20Explorer&logoColor=white' alt='IE'/>",
      "<img src='https://img.shields.io/badge/Opera-FF1B2D?style=for-the-badge&logo=Opera&logoColor=white' alt='Opera'/>",
      "<img src='https://img.shields.io/badge/Safari-000000?style=for-the-badge&logo=Safari&logoColor=white' alt='Safari'/>",
      "<img src='https://img.shields.io/badge/Tor-7D4698?style=for-the-badge&logo=Tor-Browser&logoColor=white' alt='Tor'/>"
    ],
    "Cloud Storage": [
      "<img src='https://img.shields.io/badge/Dropbox-%233B4D98.svg?style=for-the-badge&logo=Dropbox&logoColor=white' alt='Dropbox'/>",
      "<img src='https://img.shields.io/badge/Google%20Drive-4285F4?style=for-the-badge&logo=googledrive&logoColor=white' alt='Google Drive'/>",
      "<img src='https://img.shields.io/badge/Mega-%23D90007.svg?style=for-the-badge&logo=Mega&logoColor=white' alt='Mega.nz'/>",
      "<img src='https://img.shields.io/badge/OneDrive-white?style=for-the-badge&logo=Microsoft%20OneDrive&logoColor=0078D4' alt='OneDrive'/>",
      "<img src='https://img.shields.io/badge/Proton%20Drive-6d4aff?style=for-the-badge&logo=proton%20drive&logoColor=white' alt='Proton Drive'/>"
    ],
    "Databases": [
      "<img src='https://img.shields.io/badge/Microsoft%20SQL%20Server-CC2927?style=for-the-badge&logo=microsoft%20sql%20server&logoColor=white' alt='Microsoft SQL Server'/>",
      "<img src='https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white' alt='MySQL'/>",
      "<img src='https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white' alt='Postgres'/>",
      "<img src='https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white' alt='Redis'/>",
      "<img src='https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white' alt='SQLite'/>"
    ],
    "Design": [
      "<img src='https://img.shields.io/badge/Adobe%20After%20Effects-9999FF.svg?style=for-the-badge&logo=Adobe%20After%20Effects&logoColor=white' alt='Adobe After Effects'/>",
      "<img src='https://img.shields.io/badge/adobe%20illustrator-%23FF9A00.svg?style=for-the-badge&logo=adobe%20illustrator&logoColor=white' alt='Adobe Illustrator'/>",
      "<img src='https://img.shields.io/badge/adobe%20photoshop-%2331A8FF.svg?style=for-the-badge&logo=adobe%20photoshop&logoColor=white' alt='Adobe Photoshop'/>",
      "<img src='https://img.shields.io/badge/Adobe%20Premiere%20Pro-9999FF.svg?style=for-the-badge&logo=Adobe%20Premiere%20Pro&logoColor=white' alt='Adobe Premiere Pro'/>",
      "<img src='https://img.shields.io/badge/blender-%23F5792A.svg?style=for-the-badge&logo=blender&logoColor=white' alt='Blender'/>",
      "<img src='https://img.shields.io/badge/Gimp-657D8B?style=for-the-badge&logo=gimp&logoColor=FFFFFF' alt='Gimp GNU Image Manipulation Program'/>"
    ],
    "Frameworks, Platforms and Libraries": [
      "<img src='https://img.shields.io/badge/.NET-5C2D91?style=for-the-badge&logo=.net&logoColor=white' alt='.Net'/>",
      "<img src='https://img.shields.io/badge/blazor-%235C2D91.svg?style=for-the-badge&logo=blazor&logoColor=white' alt='Blazor'/>",
      "<img src='https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white' alt='Bootstrap'/>",
      "<img src='https://img.shields.io/badge/expo-1C1E24?style=for-the-badge&logo=expo&logoColor=#D04A37' alt='Expo'/>",
      "<img src='https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white' alt='Flask'/>",
      "<img src='https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white' alt='jQuery'/>",
      "<img src='https://img.shields.io/badge/laravel-%23FF2D20.svg?style=for-the-badge&logo=laravel&logoColor=white' alt='Laravel'/>",
      "<img src='https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white' alt='MUI'/>",
      "<img src='https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white' alt='NPM'/>",
      "<img src='https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white' alt='NodeJS'/>",
      "<img src='https://img.shields.io/badge/opencv-%23white.svg?style=for-the-badge&logo=opencv&logoColor=white' alt='OpenCV'/>",
      "<img src='https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB' alt='React'/>",
      "<img src='https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB' alt='React Native'/>",
      "<img src='https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white' alt='TailwindCSS'/>",
      "<img src='https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white' alt='Vite'/>",
      "<img src='https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D' alt='Vue.js'/>",
      "<img src='https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black' alt='Webpack'/>",
      "<img src='https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white' alt='Yarn'/>"
    ],
    "Hosting/SaaS": [
      "<img src='https://img.shields.io/badge/azure-%230072C6.svg?style=for-the-badge&logo=microsoftazure&logoColor=white' alt='Azure'/>",
      "<img src='https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white' alt='Github Pages'/>"
    ],
    "IDEs/Editors": [
      "<img src='https://img.shields.io/badge/Android%20Studio-3DDC84.svg?style=for-the-badge&logo=android-studio&logoColor=white' alt='Android Studio'/>",
      "<img src='https://img.shields.io/badge/Atom-%2366595C.svg?style=for-the-badge&logo=atom&logoColor=white' alt='Atom'/>",
      "<img src='https://img.shields.io/badge/Eclipse-FE7A16.svg?style=for-the-badge&logo=Eclipse&logoColor=white' alt='Eclipse'/>",
      "<img src='https://img.shields.io/badge/IntelliJIDEA-000000.svg?style=for-the-badge&logo=intellij-idea&logoColor=white' alt='IntelliJ IDEA'/>",
      "<img src='https://img.shields.io/badge/Notepad++-90E59A.svg?style=for-the-badge&logo=notepad%2b%2b&logoColor=black' alt='Notepad++'/>",
      "<img src='https://img.shields.io/badge/pycharm-143?style=for-the-badge&logo=pycharm&logoColor=black&color=black&labelColor=green' alt='PyCharm'/>",
      "<img src='https://img.shields.io/badge/sublime_text-%23575757.svg?style=for-the-badge&logo=sublime-text&logoColor=important' alt='Sublime Text'/>",
      "<img src='https://img.shields.io/badge/VS%20Code%20Insiders-35b393.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white' alt='VS Code Insiders'/>",
      "<img src='https://img.shields.io/badge/Xcode-007ACC?style=for-the-badge&logo=Xcode&logoColor=white' alt='Xcode'/>"
    ],
    "Languages": [
      "<img src='https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=csharp&logoColor=white' alt='C#'/>",
      "<img src='https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white' alt='HTML5'/>",
      "<img src='https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white' alt='Java'/>",
      "<img src='https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E' alt='JavaScript'/>",
      "<img src='https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white' alt='Markdown'/>",
      "<img src='https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white' alt='PHP'/>",
      "<img src='https://img.shields.io/badge/PowerShell-%235391FE.svg?style=for-the-badge&logo=powershell&logoColor=white' alt='PowerShell'/>",
      "<img src='https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54' alt='Python'/>",
      "<img src='https://img.shields.io/badge/swift-F54A2A?style=for-the-badge&logo=swift&logoColor=white' alt='Swift'/>",
      "<img src='https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white' alt='TypeScript'/>",
      "<img src='https://img.shields.io/badge/Windows%20Terminal-%234D4D4D.svg?style=for-the-badge&logo=windows-terminal&logoColor=white' alt='Windows Terminal'/>"
    ],
    "ML/DL": [
      "<img src='https://img.shields.io/badge/Matplotlib-%23ffffff.svg?style=for-the-badge&logo=Matplotlib&logoColor=black' alt='Matplotlib'/>",
      "<img src='https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white' alt='NumPy'/>",
      "<img src='https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white' alt='Pandas'/>",
      "<img src='https://img.shields.io/badge/scikit--learn-%23F7931E.svg?style=for-the-badge&logo=scikit-learn&logoColor=white' alt='scikit-learn'/>",
      "<img src='https://img.shields.io/badge/SciPy-%230C55A5.svg?style=for-the-badge&logo=scipy&logoColor=white' alt='SciPy'/>",
      "<img src='https://img.shields.io/badge/TensorFlow-%23FF6F00.svg?style=for-the-badge&logo=TensorFlow&logoColor=white' alt='TensorFlow'/>"
    ],
    "Operating System": [
      "<img src='https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white' alt='Android'/>",
      "<img src='https://img.shields.io/badge/iOS-000000?style=for-the-badge&logo=ios&logoColor=white' alt='iOS'/>",
      "<img src='https://img.shields.io/badge/mac%20os-000000?style=for-the-badge&logo=macos&logoColor=F0F0F0' alt='macOS'/>",
      "<img src='https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white' alt='Ubuntu'/>",
      "<img src='https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white' alt='Windows'/>"
    ],
    "Version Control": [
      "<img src='https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white' alt='Git'/>",
      "<img src='https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white' alt='GitHub'/>"
    ],
    "Other": [
      "<img src='https://img.shields.io/badge/jira-%230A0FFF.svg?style=for-the-badge&logo=jira&logoColor=white' alt='Jira'/>",
      "<img src='https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white' alt='Postman'/>",
      "<img src='https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white' alt='Swagger'/>"
    ] 
    // ... other categories (add as needed)
  };

  return (
    
    <div className="container mx-auto p-4 text-gray-300"> {/* Update text color for visibility */}
    <IconButton onClick={handleBack} sx={{ position: 'absolute', top: 20, left: 20, zIndex: 1 }}>
        <ArrowBackIcon />
      </IconButton><br></br><br></br>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Responsive grid layout */}
        {Object.entries(skillsCategories).map(([category, badges]) => (
          <div key={category} className="bg-gray-800 p-4 rounded-lg shadow-lg"> {/* Background box for each skill group */}
            <h2 className="text-xl md:text-2xl font-bold mb-4">{category}</h2> {/* Consistent heading styling */}
            <div className="flex flex-wrap gap-4 justify-start"> {/* Content alignment */}
              {badges.map((badge, index) => (
                <div key={index} dangerouslySetInnerHTML={{ __html: badge }} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
