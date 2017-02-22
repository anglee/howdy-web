import { expect } from 'chai';
import howdy from './Anx_Slashes';

describe('howdy', () => {
  it('test case 1', () => {
    const input = `\\/\\/\\/\\/\\/`;
    expect(howdy(input)).to.equal(`\\/\\/\\/\\/\\/`);
  });

  it('test case 2', () => {
    const input = `/\\/\\/\\/\\/\\`;
    expect(howdy(input)).to.equal(`/\\/\\/\\/\\/\\`);
  });

  it('test case 3', () => {
    const input = ``;
    expect(howdy(input)).to.equal(``);
  });
  it('test case 4', () => {
    const input = `\\\\\\\\////`;
    expect(howdy(input)).to.equal(`\\      /
 \\    / 
  \\  /  
   \\/   `);
  });
  it('test case 4 - 2', () => {
    const input = `////\\\\\\\\`;
    expect(howdy(input)).to.equal(`   /\\   
  /  \\  
 /    \\ 
/      \\`);
  });
  it('test case 5 - 1', () => {
    const input = `\\\\\\\\\\\\\\\\////`;
    expect(howdy(input)).to.equal(`\\           
 \\          
  \\         
   \\        
    \\      /
     \\    / 
      \\  /  
       \\/   `);
  });
  it('test case 5 - 2', () => {
    const input = `////\\\\\\\\\\\\\\\\`;
    expect(howdy(input)).to.equal(`   /\\       
  /  \\      
 /    \\     
/      \\    
        \\   
         \\  
          \\ 
           \\`);
  });
  it('test case 6 - 1', () => {
    const input = `\\\\\\\\////////`;
    expect(howdy(input)).to.equal(`           /
          / 
         /  
        /   
\\      /    
 \\    /     
  \\  /      
   \\/       `);
  });
  it('test case 6 - 2', () => {
    const input = `////////\\\\\\\\`;
    expect(howdy(input)).to.equal(`       /\\   
      /  \\  
     /    \\ 
    /      \\
   /        
  /         
 /          
/           `);
  });

  it('test case 7 - 1', () => {
    const input = `\\\\//\\\\//`;
    expect(howdy(input)).to.equal(`\\  /\\  /
 \\/  \\/ `);
  });

  it('test case 7 - 2', () => {
    const input = `//\\\\//\\\\`;
    expect(howdy(input)).to.equal(` /\\  /\\ 
/  \\/  \\`);
  });

  it('test case 8', () => {
    const input = `\\\\\\`;
    expect(howdy(input)).to.equal(`\\  
 \\ 
  \\`);
  });

  it('test case 9', () => {
    const input = `///`;
    expect(howdy(input)).to.equal(`  /
 / 
/  `);
  });
});
