const structure = [
    {
      'folder': true,
      'title': 'Films',
      'children': [
        {
          'title': 'Iron Man.avi'
        },
        {
          'folder': true,
          'title': 'Fantasy',
          'children': [
            {
              'title': 'The Lord of the Rings.avi'
            },
            {
              'folder': true,
              'title': 'New folder 1',
              'children': false
            }
          ]
        }
      ]
    },
    {
      'folder': true,
      'title': 'Documents',
      'children': [
        {
          'folder': true,
          'title': 'EPAM Homework answers',
          'children': null
        }
      ]
    }
];

const rootNode = document.getElementById('root');

// Todo: your code goes here
let films = document.createElement('div');
let containFilms = document.createElement('div');
let Folders1 = document.createElement('div');
let file1 = document.createElement('div');
let file2 = document.createElement('div');
let Folders2 = document.createElement('div');
let file3 = document.createElement('div');
let Folders3 = document.createElement('div')
let folderItem1 = document.createElement('div');
let folderItem2 = document.createElement('div');
let documents = document.createElement('div');





let folder = document.createElement('i');
let iconFolder = document.createElement('i');
let iconFolder2 = document.createElement('i');
let iconFolder3 = document.createElement('i')
let iconFolder4 = document.createElement('i')
let iconFolder5 = document.createElement('i');
let iconFolder6 = document.createElement('i');


let filmText = document.createElement('p');
let IronMan = document.createElement('p');
let fantasy = document.createElement('p');
let LordOfRing = document.createElement('p');
let empty = document.createElement('p');
let emptyFolderP = document.createElement('p');
let DocFolderP = document.createElement('p');
let DocItemP = document.createElement('p');
let documentsP = document.createElement('p');


films.classList.add('films');
containFilms.classList.add('contain-films');
folder.classList.add('material-icons');
iconFolder.classList.add('material-icons');
iconFolder2.classList.add('material-icons');
iconFolder3.classList.add('material-icons');
iconFolder4.classList.add('material-icons');
iconFolder5.classList.add('material-icons');
iconFolder6.classList.add('material-icons');


folder.innerHTML = 'folder';
iconFolder.innerHTML = 'insert_drive_file';
iconFolder2.innerHTML = 'folder';
iconFolder3.innerHTML = 'insert_drive_file';
iconFolder4.innerHTML = 'folder';
iconFolder5.innerHTML = 'folder';
iconFolder6.innerHTML = 'folder';

filmText.innerHTML = 'Films';
IronMan.innerHTML = 'Iron Man.avi';
fantasy.innerHTML = 'Fantasy';
LordOfRing.innerHTML = 'Lord of The Ring.avi';
empty.innerHTML = 'New folder 1';
emptyFolderP.innerHTML = 'Folder is empty';
documentsP.innerHTML = 'Documents';
DocFolderP.innerHTML = 'Epam homeworks answers';
DocItemP.innerHTML = 'Folder is empty';


Folders1.classList.add('Folders-1');
file1.classList.add('item-1');
file2.classList.add('item-2');
Folders2.classList.add('Folders-2');
file3.classList.add('item-3');
Folders3.classList.add('Folders-3');
folderItem1.classList.add('folderItem-1');
folderItem2.classList.add('folderItem-2');
documents.classList.add('documents');


folderItem2.appendChild(emptyFolderP);
folderItem1.appendChild(iconFolder4);
folderItem1.appendChild(empty);
Folders3.appendChild(file3);
Folders3.appendChild(folderItem1);
Folders3.appendChild(folderItem2);
file3.appendChild(iconFolder3);
file3.appendChild(LordOfRing);
Folders2.appendChild(file3);
Folders2.appendChild(Folders3);
file2.appendChild(iconFolder2);
file2.appendChild(fantasy);
file1.appendChild(iconFolder);
file1.appendChild(IronMan);
Folders1.appendChild(file1);
Folders1.appendChild(file2);
containFilms.appendChild(folder);
containFilms.appendChild(filmText);
films.appendChild(containFilms);
films.appendChild(Folders1);
films.appendChild(Folders2);
documents.appendChild(iconFolder5);
documents.appendChild(documentsP);
rootNode.appendChild(films);
rootNode.appendChild(documents);


containFilms.addEventListener('click', function(){
  Folders1.classList.toggle( "active" );
  }
)
file2.addEventListener('click', function(){
  Folders3.classList.toggle( 'active' );
  file3.classList.toggle('active');
  
})

folderItem1.addEventListener('click', function(){
  
})
