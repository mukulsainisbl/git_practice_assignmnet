function test_prime(number)
{
  if (number =0 )
  {
    return false;
  }
  else if(number  === 2)
  {
    return true;
  }
{
    for(let i = 2; i < number; i++)
    {
      if(number % i === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

console.log(test_prime(37));
