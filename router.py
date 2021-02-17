from pyngrok.conf import PyngrokConfig
from pyngrok import ngrok

pyngrok_config = PyngrokConfig(auth_token="1gHfj1Dt07UcOMxx7pO6pCf8eja_3Utt8MoQhJp4635XeCA14")
public_url = ngrok.connect(8081,pyngrok_config=pyngrok_config)

f= open("redirect.txt","w+")
f.write(public_url.replace('http','https'))
f.close()

ngrok_process = ngrok.get_ngrok_process()
pend = ngrok_process.proc.wait(60*5)