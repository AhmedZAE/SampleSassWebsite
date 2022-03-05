

// JavaScript way of creating Extention methods ... 
Array.prototype.mySort = function(sortFunction){

    const posArray = [];

    this.forEach(itemA => {

        let pos = 0;
        this.forEach(itemB => pos += sortFunction(itemA, itemB));

        for (let i = 0; i < posArray.length; i++) {
            
            if (pos < posArray[i].position) {
                
                posArray.splice(i, 0, {item: itemA, position: pos});
                return;
            }
        }
        
        posArray.push({item: itemA, position: pos});
        
    });

    return posArray.map(posItem => posItem.item);
}




const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];


const sortedAges = ages.sort((a, b) => (a > b ? 1 : -1));
console.log(sortedAges);


const mySortedAges = ages.mySort((a, b) => (a > b ? 1 : -1));
console.log(mySortedAges);



const names = ['Ahmed', 'Ahme', 'Reham', 'Nermeen', 'Yaser', 'Wesam', 'Zaki', 'Entesar', 'Matboli', 'Attia', 'Lila',
 'Waleed', 'Sameh', 'Sabah', 'Renad', 'Ghada', 'Omar', 'Sama', 'Lara', 'Sadan', 'Lian', 'Sherif', 'Hassan',
  'Kareem', 'Rasha', 'Reda', 'Abdo', 'Mohamed', 'Adil', 'Eman', 'Eslam', 'Medhat', 'Naguib', 'Barakat',
   'Anan', 'Tawfik', 'Fawzy', 'Khaled', 'Rania', 'Serag', 'Abbas', 'Hemdan', 'Sayed', 'Yehya', 'Mostafa',
    'Ebrahim', 'Zakaria', 'Bahaa', 'Baher', 'Doaa', 'Farag', 'Gamal', 'Isamil', 'Tasneem'];


const sortedNames = names.sort();
console.log(sortedNames);





const alphabet = 'abcdefghijklmnopqrstuvwxyz';
alphaRank = (name, index) => alphabet.indexOf(name[index].toLowerCase());

function nameSort(nameA, nameB){

    const minLength = Math.min(nameA.length, nameB.length);
    for (let i = 0; i < minLength; i++) {

        if (alphaRank(nameA, i) === alphaRank(nameB, i)) continue;

        return alphaRank(nameA, i) > alphaRank(nameB, i) ? 1 : -1;
    }

    return nameA.length > nameB.length ? 1 : -1;
}


const mySortedNames = names.mySort(nameSort);
console.log(mySortedNames);
