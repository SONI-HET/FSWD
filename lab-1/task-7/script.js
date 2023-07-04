const button=document.getElementById('btn');
        button.addEventListener('click',function displayContent(){
            let initialText="Tap";
            if (button.textContent.toLowerCase().includes(initialText.toLowerCase())) {
                button.textContent = 'Button Tapped!!!';
            } 
            else {
                button.textContent = initialText;
        };
        });