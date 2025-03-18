//print 3 no in array
let noarray=[3, 4 ,5 ]
for(let i=0;i<noarray.length;i++){
	{
		console.log(noarray[i])
	}
	}
	//print  string values using Array
let name=["alice","bob","clara"]
for(let i=0;i<3;i++)
 {
	console.log(name[i])
}
//forEach arrow function
let num=[25,22,96]
num.forEach((n) =>{
	console.log(n)
})	
//find the maximum no in the array using forEach
let max=0;
noarray.forEach((n)=>{
	/*if(max<n)
	{
		max=n
	}*/
	(max<n) && (max=n)
})
console.log("max:"+max)


//print nested array[[1,2,20][5,6][8,5,3]]
let arr2=[[1,2,20],[5,6],[8,5,3]]
arr2.forEach((n) =>{
n.forEach((i) =>{
	console.log(i)
}
)
})

/*
a=[4,5,6,3,7]
b=[8,3,2,1,5]
find the common elements between a and b
*/



let a=[4,5,6,3,7]
let b=[8,3,2,1,5]
for(let i=0;i<5;i++)
{
		for(let j=0;j<5;j++)
		{
			if(a[i]==b[j])
			{
				console.log("common element "+a[i])
            }
        }
}
//arr=[1,2,3,4,5,6]
//target=7
//write a code to find the all pairs that sumup to the target		
		let target =7
		let mid=parseInt(target/2)+1
		let max1=target-1
		let srt=1
		
		for(let i=srt;i<mid;i++)
		{
			for(let j=max;j>mid;j--)
			{
				if(i+j==target)
				{
					console.log("pair" +i+","+j)
				}
		}
		
		}
//[4,8,3,4,3,2,1,8,4]
//find the most frequent element in the array
let  c=[4,8,3,4,3,2,1,8,4]
let count=0
for(let i=0;i<8;i++)
{
	for(let j=1;j<8;j++)
	{
		if(c[i]==c[j])
		{
			count=count+1
		}
	}
}

//array operation
//push and pop
arr3=['a','b','c']
console.log(arr3)
arr3.push('s')
arr3.push('k')
arr3.push('r')
console.log(arr3)
arr3.pop()
console.log(arr3)

//reverse the array using push and pop
// a b c d -> d c b a


//JSON//{key:value}
let student={regno:'2021/ict/86',name:'shiro',age:'22',course:'IT',skills:['java',"JS",'C++']}
console.log(student)
console.log(student.name)
let students=[
{regno:'2021/ICT/51',name:'sharo',age:23,course:'IT'},
{regno:'2021/ICT/86',name:'shiro',age:22,course:'IT'},
{regno:'2021/ICT/87',name:'kesh',age:22,course:'IT'}
]
console.log(students)

//define 10 student JSON
//store it in a array
let std=[{regno:'2021ict01',gender:'female',course:'IT',gpa:2.38},
         {regno:'2021ict05',gender:'male',course:'AMC',gpa:3.70},
         {regno:'2021ict13',gender:'female',course:'IT',gpa:3.64},
         {regno:'2021ict45',gender:'female',course:'IT',gpa:2.99},
		 {regno:'2021ict84',gender:'female',course:'IT',gpa:1.89},
		 {regno:'2021ict51',gender:'male',course:'IT',gpa:3.90},
		 {regno:'2021ict98',gender:'female',course:'AMC',gpa:2.45},
		 {regno:'2021ict58',gender:'male',course:'IT',gpa:3.83},
		 {regno:'2021ict56',gender:'male',course:'AMC',gpa:3.78},
		 {regno:'2021ict43',gender:'male',course:'BIO',gpa:2.37}]
console.log(std)
	
	console.log("")
	
//find the female students
for(let i=0;i<10;i++)
{
	if(std[i].gender=='female')
	{
		console.log(std[i].regno)
	}
}
//find the students who are following it course
for(let i=0;i<10;i++)
{
	if(std[i].course=='IT')
	{
		console.log(std[i].regno)
	}
}
console.log("")

//find the max and gpa average
max=std[0].gpa
  for(let i=0;i<10;i++)
  {
	  if(std[i].gpa>max)
	  {
		  max=std[i].gpa
	  }
  }
  console.log("Max: "+max)
  
  console.log("")
  
  //find the GPA average 
  let total=0
  for(let i=0; i<10;i++)
  {
	  total=total+std[i].gpa
  }
  let avg=total/10
  console.log("Average gpa: "+avg)