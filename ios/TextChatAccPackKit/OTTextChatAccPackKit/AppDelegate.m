//
//  AppDelegate.m
//
//  Copyright © 2016 Tokbox, Inc. All rights reserved.
//

#import "AppDelegate.h"

@interface AppDelegate ()

@end

@implementation AppDelegate

static OTAcceleratorSession *sharedSession;

- (OTAcceleratorSession *)getSharedAcceleratorSession {
    return sharedSession;
}

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    // Override point for customization after application launch.
    
    sharedSession = [[OTAcceleratorSession alloc] initWithOpenTokApiKey:@"100" sessionId:@"1_MX4xMDB-fjE0ODEwNjIwODY5MTZ-dWtwUWMxQUlNd3BYSGVicXgwMlVackowfn4" token:@"T1==cGFydG5lcl9pZD0xMDAmc2RrX3ZlcnNpb249dGJwaHAtdjAuOTEuMjAxMS0wNy0wNSZzaWc9ZDc3ZTA3ZTFjZWFiOThhZTUzNTI4OTNhYjY5Y2ZkOTg1OGVkMTYxZTpzZXNzaW9uX2lkPTFfTVg0eE1EQi1makUwT0RFd05qSXdPRFk1TVRaLWRXdHdVV014UVVsTmQzQllTR1ZpY1hnd01sVmFja293Zm40JmNyZWF0ZV90aW1lPTE0ODEwNjE5NjMmcm9sZT1tb2RlcmF0b3Imbm9uY2U9MTQ4MTA2MTk2My40MTI0MjAzMDg0MDExNyZleHBpcmVfdGltZT0xNDgzNjUzOTYz"];
    return YES;
}

- (void)applicationWillResignActive:(UIApplication *)application {
    // Sent when the application is about to move from active to inactive state. This can occur for certain types of temporary interruptions (such as an incoming phone call or SMS message) or when the user quits the application and it begins the transition to the background state.
    // Use this method to pause ongoing tasks, disable timers, and throttle down OpenGL ES frame rates. Games should use this method to pause the game.
}

- (void)applicationDidEnterBackground:(UIApplication *)application {
    // Use this method to release shared resources, save user data, invalidate timers, and store enough application state information to restore your application to its current state in case it is terminated later.
    // If your application supports background execution, this method is called instead of applicationWillTerminate: when the user quits.
}

- (void)applicationWillEnterForeground:(UIApplication *)application {
    // Called as part of the transition from the background to the inactive state; here you can undo many of the changes made on entering the background.
}

- (void)applicationDidBecomeActive:(UIApplication *)application {
    // Restart any tasks that were paused (or not yet started) while the application was inactive. If the application was previously in the background, optionally refresh the user interface.
}

- (void)applicationWillTerminate:(UIApplication *)application {
    // Called when the application is about to terminate. Save data if appropriate. See also applicationDidEnterBackground:.
}

@end
