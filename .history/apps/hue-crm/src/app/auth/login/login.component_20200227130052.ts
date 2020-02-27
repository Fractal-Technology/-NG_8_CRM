import {ChangeDetectionStrategy, Component} from '@angular/core';
import {NbLoginComponent} from '@nebular/auth';


@Component({
	selector: 'fractalcrm-login',
	templateUrl: './login.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent extends NbLoginComponent {

}
