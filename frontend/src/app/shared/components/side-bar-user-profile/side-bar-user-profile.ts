import { Component } from "@angular/core";
import { LabelConstants } from "../../../shared/constants/label.constants";
import { RouterLink } from "@angular/router";
import { RouteLink as Routes } from "../../../shared/constants/route-link";

@Component({
  selector: 'side-bar-user-profile',
  standalone: true,
  imports: [RouterLink],
  styleUrl: './side-bar-user-profile.scss',
  templateUrl: './side-bar-user-profile.html',
})
export class SideBarUserProfile {
  protected readonly label = LabelConstants;
  protected readonly routes = Routes;

}
