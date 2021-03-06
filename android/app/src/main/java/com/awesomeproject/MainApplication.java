package com.awesomeproject;

import com.evollu.react.fcm.FIRMessagingPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import org.reactnative.camera.RNCameraPackage;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.zmxv.RNSound.RNSoundPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.airbnb.android.react.lottie.LottiePackage;

import java.util.Arrays;
import java.util.List;

import com.smixx.fabric.FabricPackage;
import com.crashlytics.android.Crashlytics;
import io.fabric.sdk.android.Fabric;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new RNSoundPackage(),
            new VectorIconsPackage(),
            new RNCameraPackage(),
            new LottiePackage(),
            new FIRMessagingPackage(),
            new FabricPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() { // <-- Check this block exists
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false); // <-- Check this line exists within the block

    Fabric.with(this, new Crashlytics());
  }
}
