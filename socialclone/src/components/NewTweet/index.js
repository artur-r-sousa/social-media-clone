import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";

function NewTweet(){
    return (
        <div>
            <Input
                id="tweet"
                style={{padding: 20}}
                placeholder="O que está acontecendo?"
                disableUnderline={true}
                startAdornment={
                    <InputAdornment
                        position="start"
                    >
                        <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2"></img>
                    </InputAdornment>
                }
                endAdornment={
                    <InputAdornment
                        position="end"
                    >
                        <button type="button" class="btn btn-primary">Tweetar</button>
                    </InputAdornment>
                }
                
            ></Input>
          </div>
    );
}

export default NewTweet;