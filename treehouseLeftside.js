const fs = require('fs');

//ดึงข้อมูลความสูงของต้นไม้มาจากไฟล์ .txt
const data = fs.readFileSync('treehouse_data.txt', 'utf8');

//ทำการแยกข้อมูลออกเป็นแถวแนวนอน 5 แถว
const rows = data.split('\n');

//สร้าง Function หาจำนวนต้นไม้ที่มองเห็นได้ในแถวแนวนอน เมื่อมองจากด้านซ้าย
function countTreesInRow(row) {
    let count = 0;
    let maxHeight = 0;
  
    for (let i = 0; i < row.length; i++) {
      const height = Number(row[i]);
  
      //ให้นับรวมต้นไม้ที่อยู่ทางด้านซ้ายสุด เป็นต้นไม้ที่มองเห็นได้เสมอ
      if (i === 0) {
        count++;
        maxHeight = height;
      } else {
        //ตั้งเงื่อนไข ถ้าต้นไม้ก่อนหน้ามีความสูงมากกว่าต้นไม้ที่อยู่ข้างหลัง จะข้ามไปต้นถัดไป
        if (height > maxHeight) {
          maxHeight = height;
          count++;
        }
      }
    }
  
    return count;
}

// สร้างอาร์เรย์เก็บจำนวนต้นไม้ในแถวแนวนอนของแต่ละแถว
const treeCounts = rows.map(countTreesInRow);

//นำจำนวนต้นไม้ในแต่ละแถวมารวมกัน เพื่อให้ได้จำนวนต้นไม้ทั้งหมดที่มองเห็นได้
const totalTrees = treeCounts.reduce((acc, count) => acc + count, 0);

// console.log('จำนวนต้นไม้ในแถวแนวนอนของแต่ละแถว:');
// treeCounts.forEach((count, index) => {
//   console.log(`แถวที่ ${index + 1}: ${count} ต้นไม้`);
// });

console.log(`จำนวนต้นไม้ทั้งหมดที่มองเห็นได้คือ ${totalTrees} ต้นไม้`);