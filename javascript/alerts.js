function alerts(status){
	if (status <= 1) {
		return "Alert1.png"
    }
    if (status > 1 && status <= 2.5) {
		return "Alert1.png"
    }
    if (status > 2.5 && status <= 3.5) {
		return "Alert3.png"
    }
    if (status > 3.5) {
		return "Alert5.png"
    }
 }
