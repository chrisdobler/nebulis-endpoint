const logoText = `                                                     .,,,, 
                                              ,;;;;;;,.    
    Nebulis Analytics                   ,;;;;:             
    Code Monitoring Endpoint        :;;;,                  
    v%s                      :;;;                       
                            .;;;.                          
                         .;;;               .:;;;;;;;;;;.  
                       ;;;,             ;;;';.      ,;;;;; 
                     ;;;.             :,              :;;; 
                   :;;                                ;;;  
                  ;;;           :;;;;;;              ;;;   
                 .;;;;       ;;;;;;;;               ;;;    
                  ;;;;;,   :;;;;;,   .;,          :;;      
                                   ;;;;         :;;.       
                                .;;;;:        ;;;.         
                              ;;;;;        ,;;:            
 '                        ,;;;;;         ';,               
.;;;                 .;;;;;;.         ';                   
  ;;;;;;::,,::;;;;;;;;;:.                                  
     ,:;;;;;;;;;:,.\n`;


const messages = {
  logo: () => { console.log(logoText.blue, '0.1.0'); },
};

export { messages as default };
